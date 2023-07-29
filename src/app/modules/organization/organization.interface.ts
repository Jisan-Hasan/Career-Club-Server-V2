import { Model } from 'mongoose';

export type IOrganization = {
  email: string;
  name?: string;
  industry?: string;
  address?: string;
  foundedYear?: number;
  employees?: number;
  website?: string;
  phone?: string;
  details?: string;
  image?:string;
};

export type OrganizationModel = Model<IOrganization, Record<string, unknown>>;

export type IOrganizationFilters = {
  searchTerm?: string;
  email?: string;
  name?: string;
};
