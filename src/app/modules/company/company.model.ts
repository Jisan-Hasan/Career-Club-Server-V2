import { Schema, model } from 'mongoose';
import { CompanyModel, ICompany } from './company.interface';

export const CompanySchema = new Schema<ICompany, CompanyModel>(
  {
    email: { type: String, unique: true, required: true },
    name: { type: String },
    industry: { type: String },
    address: { type: String },
    foundedYear: { type: Number },
    employees: { type: Number },
    website: { type: String },
    phone: { type: String },
    details: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Company = model<ICompany, CompanyModel>('Company', CompanySchema);
