import { IPayment } from './payment.interface';
import { Payment } from './payment.model';

const createPayment = async (payload: IPayment): Promise<IPayment | null> => {
  const result = (await Payment.create(payload)).populate('package');
  return result;
};

export const PaymentService = { createPayment };
