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

router.get('/:id', PaymentController.getSinglePayment);

router.get('/', PaymentController.getAllPayments);

export const PaymentRoutes = router;
