import { z } from 'zod'

export const contactSchema = z.object({
  nom: z.string().trim().min(2, 'Votre nom (2 caractères minimum)').max(100),
  email: z.string().trim().toLowerCase().email('Adresse e-mail invalide').max(200),
  sujet: z.string().trim().max(80).optional().or(z.literal('')),
  message: z.string().trim().min(5, 'Votre message est vide').max(5000),
  /** Champ invisible : rempli seulement par les robots. */
  site_web: z.string().max(200).optional().or(z.literal('')),
})

export const newsletterSchema = z.object({
  email: z.string().trim().toLowerCase().email('Adresse e-mail invalide').max(200),
  site_web: z.string().max(200).optional().or(z.literal('')),
})
