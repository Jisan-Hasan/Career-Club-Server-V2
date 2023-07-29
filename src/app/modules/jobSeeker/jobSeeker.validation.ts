import { z } from 'zod';
import { gender } from './jobSeeker.constant';

const updateJobSeekerZodSchema = z.object({
  body: z
    .object({
      name: z.string().optional(),
      gender: z.enum([...gender] as [string, ...string[]]).optional(),
      bio: z.string().optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      institute: z.string().optional(),
      cgpa: z.number().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      socialMediaLink: z
        .object({
          facebook: z.string().optional(),
          github: z.string().optional(),
          linkedin: z.string().optional(),
          portfolio: z.string().optional(),
        })
        .optional(),
      resume: z.string().optional(),
      image: z.string().optional(),
      skills: z.array(z.string()).optional(),
    })
    .strict(),
});

export const JobSeekerValidation = {
  updateJobSeekerZodSchema,
};
