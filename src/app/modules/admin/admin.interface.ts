import { Model } from 'mongoose';

export type IAdmin = {
  email: string;
  name?: string;
};

export type AdminModel = Model<IAdmin, Record<string, unknown>>;

export type IAdminFilters = {
  searchTerm?: string;
  email?: string;
  name?: string;
};
