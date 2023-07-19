import { z } from 'zod';
import { jobDurations, jobTypes } from './job.constant';

const createJobZodValidation = z.object({
  body: z
    .object({
      title: z.string({ required_error: 'Title is required' }),
      category: z.string({ required_error: 'Category is required' }),
      duration: z.enum([...jobDurations] as [string, ...string[]], {
        required_error: 'Duration is required',
      }),
      type: z.enum([...jobTypes] as [string, ...string[]], {
        required_error: 'Job Type is required',
      }),
      location: z.string({ required_error: 'Location is required' }),
      salary: z.number({ required_error: 'Salary is required' }),
      experience: z.string({ required_error: 'Experience is required' }),
      description: z.string({ required_error: 'Job Description is required' }),
      employer_email: z.string({ required_error: 'Email is required' }).email(),
    })
    .strict(),
});

const updateJobZodValidation = z.object({
  body: z
    .object({
      title: z.string().optional(),
      category: z.string().optional(),
      duration: z.enum([...jobDurations] as [string, ...string[]]).optional(),
      type: z.enum([...jobTypes] as [string, ...string[]]).optional(),
      location: z.string().optional(),
      salary: z.number().positive().optional(),
      experience: z.string().optional(),
      description: z.string().optional(),
      employer_email: z.string().email().optional(),
      isApproved: z.boolean().optional(),
    })
    .strict(),
});

export const JobValidation = { createJobZodValidation, updateJobZodValidation };
