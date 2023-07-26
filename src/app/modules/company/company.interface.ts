import { Model } from 'mongoose';

export type ICompany = {
  email: string;
  name?: string;
  industry?: string;
  address?: string;
  foundedYear?: number;
  employees?: number;
  website?: string;
  phone?: string;
  details?: string;
};

export type CompanyModel = Model<ICompany, Record<string, unknown>>;

export type ICompanyFilters = {
  searchTerm?: string;
  email?: string;
  name?: string;
};
