import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IPayment } from './payment.interface';
import { PaymentService } from './payment.service';

const createPayment = catchAsync(async (req: Request, res: Response) => {
  const { ...paymentData } = req.body;
  const result = await PaymentService.createPayment(paymentData);

  sendResponse<IPayment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment Saved on database Successfully',
    data: result,
  });
});

export const PaymentController = { createPayment };
