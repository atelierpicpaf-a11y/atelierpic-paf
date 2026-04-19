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
  })

export type ReservationInput = z.infer<typeof reservationSchema>
