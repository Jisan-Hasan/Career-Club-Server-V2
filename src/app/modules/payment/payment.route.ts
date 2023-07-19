import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { PaymentController } from './payment.controller';
import { PaymentValidation } from './payment.validation';

const router = express.Router();

router.post(
  '/create-payment',
  validateRequest(PaymentValidation.createPaymentZodSchema),
  PaymentController.createPayment
);

export const PaymentRoutes = router;
