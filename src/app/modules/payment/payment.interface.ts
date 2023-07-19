import { Model, Types } from 'mongoose';
import { IPackage } from '../package/package.interface';

export type IPayment = {
  price: number;
  transactionId: string;
  email: string;
  package: Types.ObjectId | IPackage;
};

export type PaymentModel = Model<IPayment, Record<string, unknown>>;

export type IPaymentFilters = {
  searchTerm?: string;
  price?: number;
  email?: string;
};
