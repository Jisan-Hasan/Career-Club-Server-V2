import { z } from 'zod';

const createJobSeekerZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }).email(),
    jobSeeker: z.string({ required_error: 'Job Seeker id is required!' }),
  }),
});

export const UserValidation = {
  createJobSeekerZodSchema,
};
