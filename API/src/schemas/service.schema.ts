import { z } from 'zod'

export const serviceSchema = z.object({
    name: z.string(),
    description: z.string(),
    dateIn: z.date(),
    dateOut: z.date(),
    hourIn: z.date(),
    hourOut: z.date(),
    amount: z.number(),
    objective: z.string(),
    syllabus: z.string(),
    userId: z.number(),
    categoryId: z.number(),
});


    
  
  
  
  
  
  
  
  
  
  
  
  