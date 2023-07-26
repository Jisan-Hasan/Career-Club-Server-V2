import { z } from 'zod';

const updateOrganizationZodSchema = z.object({
  body: z
    .object({
      name: z.string().optional(),
      industry: z.string().optional(),
      address: z.string().optional(),
      foundedYear: z.number().optional(),
      employees: z.number().optional(),
      website: z.string().optional(),
      phone: z.string().optional(),
      details: z.string().optional(),
    })
    .strict(),
});

export const OrganizationValidation = {
  updateOrganizationZodSchema,
};
