import { z } from 'zod';

const createCategoryZodSchema = z.object({
  body: z
    .object({
      title: z.string({
        required_error: 'Title is required',
      }),
    })
    .strict(),
});

const updateCategoryZodSchema = z.object({
  body: z
    .object({
      title: z.string().optional(),
    })
    .strict(),
});

export const CategoryValidation = {
  createCategoryZodSchema,
  updateCategoryZodSchema,
};
