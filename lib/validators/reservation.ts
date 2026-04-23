import { z } from 'zod'

export const reservationSchema = z
  .object({
    // Un seul des deux doit être renseigné (ateliers enfants OU session adulte)
    atelierId: z.string().uuid({ message: 'Atelier invalide' }).optional(),
    sessionId: z.string().uuid({ message: 'Session invalide' }).optional(),
    nom: z.string().trim().min(2, 'Nom trop court').max(80),
    prenom: z.string().trim().min(2, 'Prénom trop court').max(80),
    email: z.string().trim().email('Email invalide'),
    telephone: z.string().trim().max(20).optional().or(z.literal('')),
    prenomEnfant: z.string().trim().max(80).optional().or(z.literal('')),
    nomEnfant: z.string().trim().max(80).optional().or(z.literal('')),
    ageEnfant: z.coerce.number().int().min(1).max(99).optional().or(z.literal('')),
    message: z.string().trim().max(1000).optional().or(z.literal('')),
    // Duo journées créatives — 1 par défaut, 2 si venue en binôme (promo 150€ au lieu de 180€)
    nbPersonnes: z.coerce.number().int().min(1).max(2).optional(),
    prenom2: z.string().trim().max(80).optional().or(z.literal('')),
    nom2: z.string().trim().max(80).optional().or(z.literal('')),
  })
  .superRefine((data, ctx) => {
    const hasAtelier = Boolean(data.atelierId)
    const hasSession = Boolean(data.sessionId)
    if (hasAtelier === hasSession) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Fournir exactement un: atelierId OU sessionId',
        path: ['atelierId'],
      })
    }
    // Si duo, on exige les noms de la 2e personne
    if (data.nbPersonnes === 2) {
      if (!data.prenom2 || data.prenom2.trim().length < 2) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Prénom de la 2e personne requis', path: ['prenom2'] })
      }
      if (!data.nom2 || data.nom2.trim().length < 2) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Nom de la 2e personne requis', path: ['nom2'] })
      }
    }
  })

export type ReservationInput = z.infer<typeof reservationSchema>
