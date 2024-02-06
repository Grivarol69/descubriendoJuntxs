import { z } from 'zod'

export const programSchema = z.object({
    name: z.string(),
    description: z.string(),
    image: z.string(),
    urlYoutube: z.string(),
    dateIn: z.date(),
    dateOut: z.date(),
    objective: z.string(),
    syllabus: z.string(),
    categoryId: z.number(),
});