import { Schema, model } from 'mongoose';
import { IPayment, PaymentModel } from './payment.interface';

const PaymentSchema = new Schema<IPayment, PaymentModel>({
  price: { type: Number, required: true },
  transactionId: { type: String, required: true },
  email: { type: String, required: true },
  package: { type: Schema.Types.ObjectId, ref: 'Package', required: true },
});

export const Payment = model<IPayment, PaymentModel>('Payment', PaymentSchema);
