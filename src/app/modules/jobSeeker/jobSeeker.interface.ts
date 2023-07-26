import { Model } from 'mongoose';

export type UserName = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
};

export type SocialMedia = {
  facebook?: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
};

export type IJobSeeker = {
  name?: UserName;
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
  profileImage?: string;
  skills?: string[];
};

export type JobSeekerModel = Model<IJobSeeker, Record<string, unknown>>;

export type IJobSeekerFilters = {
  searchTerm?: string;
  email?: string;
  contactNo?: string;
  institute?: string;
};
