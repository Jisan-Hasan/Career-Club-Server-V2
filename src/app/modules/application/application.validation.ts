import { z } from 'zod';

const createApplicationZodValidation = z.object({
  body: z
    .object({
      seeker_email: z
        .string({ required_error: 'Applicant Email is required' })
        .email(),
      job: z.string({ required_error: 'Job id is required' }),
    })
    .strict(),
});

export const ApplicationValidation = { createApplicationZodValidation };
