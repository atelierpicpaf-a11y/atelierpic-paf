import { z } from 'zod'

export const commandeSchema = z.object({
  items: z
    .array(
      z.object({
        varianteId: z.string().uuid({ message: 'Variante invalide' }),
        quantite: z.coerce.number().int().min(1).max(20),
      })
    )
    .min(1, 'Panier vide'),
  nom: z.string().trim().min(2, 'Nom trop court').max(80),
  prenom: z.string().trim().min(2, 'Prénom trop court').max(80),
  email: z.string().trim().email('Email invalide'),
  telephone: z.string().trim().min(6, 'Téléphone requis').max(20),
  message: z.string().trim().max(1000).optional().or(z.literal('')),
  // Point relais Mondial Relay (obligatoire pour la livraison)
  relais: z.object({
    id: z.string().min(1, 'Point relais requis'),
    nom: z.string().max(200),
    adresse: z.string().max(300),
    cp: z.string().max(10),
    ville: z.string().max(120),
  }),
})

export type CommandeInput = z.infer<typeof commandeSchema>
