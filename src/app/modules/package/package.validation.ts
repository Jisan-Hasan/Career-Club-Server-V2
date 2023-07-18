import { z } from 'zod';

const createPackageZodSchema = z.object({
  body: z
    .object({
      title: z.string({
        required_error: 'Title is required',
      }),
      postNumber: z.number({
        required_error: 'Post Number is required',
      }),
      price: z.number({
        required_error: 'Price is required',
      }),
    })
    .strict(),
});

const updatePackageZodSchema = z.object({
  body: z
    .object({
      title: z.string().optional(),
      postNumber: z.number().optional(),
      price: z.number().optional(),
    })
    .strict(),
});
export const PackageValidation = {
  createPackageZodSchema,
  updatePackageZodSchema,
};
