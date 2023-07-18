import { Model } from 'mongoose';

export type ICategory = {
  title: string;
};

export type CategoryModel = Model<ICategory, Record<string, unknown>>;

export type ICategoryFilters = {
  searchTerm?: string;
  title?: string;
};
