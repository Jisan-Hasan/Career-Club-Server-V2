import { Model } from 'mongoose';

export type SocialMedia = {
  facebook?: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
};

export type IJobSeeker = {
  name?: string;
  email: string;
  gender?: 'male' | 'female';
  bio?: string;
  presentAddress?: string;
  permanentAddress?: string;
  institute?: string;
  cgpa?: number;
  contactNo?: string;
  emergencyContactNo?: string;
  socialMediaLink?: SocialMedia;
  resume?: string;
  image?: string;
  skills?: string[];
};

export type JobSeekerModel = Model<IJobSeeker, Record<string, unknown>>;

export type IJobSeekerFilters = {
  searchTerm?: string;
  email?: string;
  contactNo?: string;
  institute?: string;
};
