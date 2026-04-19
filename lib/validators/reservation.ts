import { z } from 'zod'

export const reservationSchema = z.object({
  atelierId: z.string().uuid({ message: 'Atelier invalide' }),
  nom: z.string().trim().min(2, 'Nom trop court').max(80),
  prenom: z.string().trim().min(2, 'Prénom trop court').max(80),
  email: z.string().trim().email('Email invalide'),
  telephone: z.string().trim().max(20).optional().or(z.literal('')),
  prenomEnfant: z.string().trim().max(80).optional().or(z.literal('')),
  nomEnfant: z.string().trim().max(80).optional().or(z.literal('')),
  ageEnfant: z.coerce.number().int().min(3).max(18).optional().or(z.literal('')),
  message: z.string().trim().max(1000).optional().or(z.literal('')),
})

export type ReservationInput = z.infer<typeof reservationSchema>
