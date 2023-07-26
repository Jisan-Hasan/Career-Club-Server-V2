import { Schema, model } from 'mongoose';
import { JobModel } from '../job/job.interface';
import { gender } from './jobSeeker.constant';
import { IJobSeeker, JobSeekerModel } from './jobSeeker.interface';

// Define the UserName schema
const UserNameSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String },
});

// Define the SocialMedia schema
const SocialMediaSchema = new Schema({
  facebook: { type: String },
  github: { type: String },
  linkedin: { type: String },
  portfolio: { type: String },
});

export const JobSeekerSchema = new Schema<IJobSeeker, JobModel>(
  {
    name: { type: UserNameSchema, required: true },
    email: { type: String, required: true },
    gender: { type: String, enum: gender, required: true },
    bio: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    institute: { type: String, required: true },
    cgpa: { type: Number, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String },
    socialMediaLink: { type: SocialMediaSchema },
    resume: { type: String },
    profileImage: { type: String },
    skills: [{ type: String }],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const JobSeeker = model<IJobSeeker, JobSeekerModel>(
  'JobSeeker',
  JobSeekerSchema
);
