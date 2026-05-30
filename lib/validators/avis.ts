import { z } from 'zod'

export const avisSchema = z.object({
  nom: z.string().trim().min(2, 'Ton prénom (min 2 caractères)').max(80),
  ville: z.string().trim().max(80).optional().or(z.literal('')),
  note: z.coerce.number().int().min(1).max(5),
  texte: z.string().trim().min(10, 'Ton avis (au moins 10 caractères)').max(600),
  typeAtelier: z.string().trim().max(80).optional().or(z.literal('')),
})

export type AvisInput = z.infer<typeof avisSchema>
