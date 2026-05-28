#!/usr/bin/env python3
"""
Enrichit chaque ville avec les données INSEE / data.gouv.fr.

Sources publiques utilisées :
  - geo.api.gouv.fr → population millésimée INSEE, surface, code INSEE, code EPCI,
    centre lat/lon, communes limitrophes
  - Calcul de distance Haversine depuis Craon (base de Ludivine)
  - Calcul de distance vers Poitiers, Niort, Châtellerault, Bressuire

Génère content/villes-data.json consommé par le template [ville]/page.tsx.

Usage :
  python3 scripts/enrich-villes.py
"""
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from math import atan2, cos, radians, sin, sqrt
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
VILLES_TS = ROOT / "content/villes.ts"
OUTPUT = ROOT / "content/villes-data.json"

# Craon (Vienne 86110) — base de Ludivine
CRAON_LAT = 46.7833
CRAON_LON = 0.1500

# Villes-pivots pour distances SEO
KEY_CITIES = {
    "Poitiers": (46.5802, 0.3404),
    "Niort": (46.3239, -0.4581),
    "Châtellerault": (46.8167, 0.5500),
    "Bressuire": (46.8400, -0.4900),
}

UA = {"User-Agent": "atelierpicpaf-enrich/1.0 (local content build)"}


def haversine(lat1, lon1, lat2, lon2):
    R = 6371.0
    lat1, lon1, lat2, lon2 = map(radians, [lat1, lon1, lat2, lon2])
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
    return round(R * 2 * atan2(sqrt(a), sqrt(1 - a)), 1)


def http_get_json(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=15) as resp:
        return json.loads(resp.read().decode())


def normalize(s):
    s = s.lower()
    for a, b in [("é", "e"), ("è", "e"), ("ê", "e"), ("à", "a"), ("â", "a"),
                 ("î", "i"), ("ï", "i"), ("ô", "o"), ("û", "u"), ("ü", "u"),
                 ("ç", "c"), ("'", ""), ("-", ""), (" ", "")]:
        s = s.replace(a, b)
    return s


def fetch_commune(code_postal, nom):
    """Cherche la commune sur geo.api.gouv.fr par code postal + nom."""
    params = urllib.parse.urlencode({
        "codePostal": code_postal,
        "fields": "nom,code,codeDepartement,codeRegion,codesPostaux,population,surface,centre,codeEpci",
    })
    try:
        data = http_get_json(f"https://geo.api.gouv.fr/communes?{params}")
    except Exception as e:
        return None, f"API geo: {e}"
    if not data:
        return None, f"Aucune commune trouvée pour CP {code_postal}"
    target = normalize(nom)
    # exact match d'abord
    for item in data:
        if item.get("nom") and normalize(item["nom"]) == target:
            return item, None
    # fallback : contains
    for item in data:
        if item.get("nom") and (target in normalize(item["nom"]) or normalize(item["nom"]) in target):
            return item, None
    return data[0], None  # premier résultat par défaut


# Cache des communes par département (rempli au runtime)
_DEPT_COMMUNES_CACHE = {}


def fetch_dept_communes(dept):
    """Toutes les communes d'un département, mises en cache."""
    if dept in _DEPT_COMMUNES_CACHE:
        return _DEPT_COMMUNES_CACHE[dept]
    print(f"     📡 cache miss : fetch toutes les communes du {dept}...", flush=True)
    try:
        data = http_get_json(
            f"https://geo.api.gouv.fr/departements/{dept}/communes"
            "?fields=nom,code,codesPostaux,population,centre"
        )
    except Exception as e:
        print(f"     ⚠️ Erreur fetch dept {dept}: {e}", flush=True)
        data = []
    _DEPT_COMMUNES_CACHE[dept] = data
    return data


def nearest_communes(lat, lon, dept, exclude_code, n=6, radius_km=25):
    """Top N communes les plus proches dans le même dept + dept voisins."""
    candidates = []
    # On regarde dans le dept de la ville + les départements voisins SEO-utiles (86, 79)
    for d in {dept, "86", "79"}:
        for c in fetch_dept_communes(d):
            if c.get("code") == exclude_code:
                continue
            centre = c.get("centre", {}).get("coordinates", [0, 0]) or [0, 0]
            c_lat, c_lon = centre[1], centre[0]
            if c_lat == 0 and c_lon == 0:
                continue
            dist = haversine(lat, lon, c_lat, c_lon)
            if dist <= radius_km:
                candidates.append({
                    "nom": c.get("nom"),
                    "cp": (c.get("codesPostaux") or [""])[0],
                    "dept": d,
                    "population": c.get("population"),
                    "distance": dist,
                })
    # Dédoublonne par nom (au cas où un nom apparaît dans plusieurs dept)
    seen = set()
    unique = []
    for c in sorted(candidates, key=lambda x: x["distance"]):
        if c["nom"] in seen:
            continue
        seen.add(c["nom"])
        unique.append(c)
    return unique[:n]


def parse_villes_ts(text):
    """Extrait slug + nom + dept + CP des entrées de VILLES.
    Gère les apostrophes échappées : 'Saint-Maixent-l\\'École'."""
    # Pattern qui accepte \' dans le nom
    pattern = re.compile(
        r"slug:\s*'([^']+)',\s*\n\s*"
        r"nom:\s*'((?:[^'\\]|\\.)+)',\s*\n\s*"
        r"dept:\s*'(\d+)',[^}]*?codePostal:\s*'([^']+)'",
        re.DOTALL,
    )
    out = []
    for m in pattern.finditer(text):
        slug = m.group(1)
        nom = re.sub(r"\\(.)", r"\1", m.group(2))  # unescape \' → '
        dept = m.group(3)
        cp = m.group(4)
        out.append({"slug": slug, "nom": nom, "dept": dept, "cp": cp})
    return out


def enrich_one(v):
    """Récupère les données INSEE pour une ville."""
    data, err = fetch_commune(v["cp"], v["nom"])
    if err or not data:
        return None, err
    centre = data.get("centre", {}).get("coordinates", [0, 0])
    lat, lon = centre[1], centre[0]
    surface_ha = data.get("surface", 0) or 0
    pop = data.get("population", 0) or 0
    distances = {city: haversine(c[0], c[1], lat, lon) for city, c in KEY_CITIES.items()}
    # Communes proches (calculées depuis le cache du département)
    limitrophes = nearest_communes(
        lat, lon, data.get("codeDepartement", ""), data["code"], n=6, radius_km=20
    )
    return {
        "codeInsee": data.get("code"),
        "population": pop,
        "surfaceHa": surface_ha,
        "surfaceKm2": round(surface_ha / 100, 1) if surface_ha else None,
        "densite": int(round(pop / (surface_ha / 100))) if pop and surface_ha else None,
        "lat": lat,
        "lon": lon,
        "codeEpci": data.get("codeEpci"),
        "distanceCraon": haversine(CRAON_LAT, CRAON_LON, lat, lon),
        "distances": distances,
        "limitrophes": limitrophes[:6],
    }, None


def main():
    print("🚀 Enrichissement des villes (geo.api.gouv.fr / INSEE)\n")
    text = VILLES_TS.read_text(encoding="utf-8")
    villes = parse_villes_ts(text)
    print(f"📊 {len(villes)} villes à traiter\n")

    # Charge enrichissement existant si présent (cache léger)
    existing = {}
    if OUTPUT.exists():
        try:
            existing = json.loads(OUTPUT.read_text(encoding="utf-8"))
        except Exception:
            existing = {}

    enriched = dict(existing)
    ok = err = 0
    for i, v in enumerate(villes, 1):
        print(f"  [{i:2d}/{len(villes)}] {v['nom']} ({v['cp']}) ...", end=" ", flush=True)
        data, e = enrich_one(v)
        if e or not data:
            print(f"⚠️  {e or 'unknown'}")
            err += 1
            continue
        enriched[v["slug"]] = data
        print(f"✓ {data['population']} hab · {data['surfaceKm2']} km² · {data['distanceCraon']} km Craon · {len(data['limitrophes'])} limitrophes")
        ok += 1
        time.sleep(0.25)

    OUTPUT.write_text(json.dumps(enriched, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n✅ Sauvegardé : {OUTPUT}")
    print(f"   ok: {ok} · erreurs: {err}")


if __name__ == "__main__":
    main()
