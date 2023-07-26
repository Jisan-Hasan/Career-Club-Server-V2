import { Schema, model } from 'mongoose';
import { AdminModel, IAdmin } from './admin.interface';

export const AdminSchema = new Schema<IAdmin, AdminModel>(
  {
    email: { type: String, unique: true, required: true },
    name: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Admin = model<IAdmin, AdminModel>('Admin', AdminSchema);
