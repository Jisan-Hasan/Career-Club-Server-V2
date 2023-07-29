import { z } from 'zod';

const createJobSeekerZodSchema = z.object({
  body: z
    .object({
      email: z.string({ required_error: 'Email is required' }).email(),
      image: z.string().url().optional(),
      name: z.string().optional(),
    })
    .strict(),
});

const createOrganizationZodSchema = z.object({
  body: z
    .object({
      email: z.string({ required_error: 'Email is required' }).email(),
      image: z.string().url().optional(),
      name: z.string().optional(),
    })
    .strict(),
});

const createAdminZodSchema = z.object({
  body: z
    .object({
      email: z.string({ required_error: 'Email is required' }).email(),
    })
    .strict(),
});

export const UserValidation = {
  createJobSeekerZodSchema,
  createOrganizationZodSchema,
  createAdminZodSchema,
};
