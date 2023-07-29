import { Schema, model } from 'mongoose';
import { IOrganization, OrganizationModel } from './organization.interface';

export const OrganizationSchema = new Schema<IOrganization, OrganizationModel>(
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
    image: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Organization = model<IOrganization, OrganizationModel>(
  'Organization',
  OrganizationSchema
);
