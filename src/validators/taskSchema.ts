import { z } from 'zod';


export const createTaskSchema = z.object({
    title: z.string({ required_error: 'title is required' }).min(1, 'title cannot be empty'),
    description: z.string().optional().default(''),
    status: z.enum(['pending', 'completed']).optional().default('pending'),
});


export const updateTaskSchema = z.object({
    title: z.string().min(1).optional(),
    description: z.string().optional(),
    status: z.enum(['pending', 'completed']).optional(),
});


export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;