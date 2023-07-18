import { Model } from 'mongoose';

export type IPackage = {
  title: string;
  postNumber: number;
  price: number;
};

export type PackageModel = Model<IPackage, Record<string, unknown>>;

export type IPackageFilters = {
  searchTerm?: string;
  title?: string;
};
