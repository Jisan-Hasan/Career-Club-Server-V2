import { Schema, model } from 'mongoose';
import { IPackage, PackageModel } from './package.interface';

const PackageSchema = new Schema<IPackage, PackageModel>(
  {
    title: { type: String, required: true, unique: true },
    postNumber: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Package = model<IPackage, PackageModel>('Package', PackageSchema);
