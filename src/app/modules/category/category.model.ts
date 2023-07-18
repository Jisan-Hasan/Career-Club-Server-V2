import { Schema, model } from 'mongoose';
import { CategoryModel, ICategory } from './category.interface';

const CategorySchema = new Schema<ICategory, CategoryModel>(
  {
    title: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Package = model<ICategory, CategoryModel>(
  'Category',
  CategorySchema
);
