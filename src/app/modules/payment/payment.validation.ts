import { z } from 'zod';

const createPaymentZodSchema = z.object({
  body: z
    .object({
      price: z.number({ required_error: 'Price is required' }).positive(),
      transactionId: z
        .string({ required_error: 'Transaction id is required' })
        .nonempty(),
      email: z.string({ required_error: 'Email is required' }).email(),
      package: z.string({ required_error: 'Package id is required' }),
    })
    .strict(),
});

export const PaymentValidation = { createPaymentZodSchema };
