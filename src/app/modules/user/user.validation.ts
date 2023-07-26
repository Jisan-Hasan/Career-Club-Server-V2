import { z } from 'zod';

const createJobSeekerZodSchema = z.object({
  body: z
    .object({
      email: z.string({ required_error: 'Email is required' }).email(),
    })
    .strict(),
});

export const UserValidation = {
  createJobSeekerZodSchema,
};
