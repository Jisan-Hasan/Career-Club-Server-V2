import { z } from 'zod';

const updateAdminZodValidation = z.object({
  body: z
    .object({
      name: z.string().optional(),
    })
    .strict(),
});

export const AdminValidation = { updateAdminZodValidation };
