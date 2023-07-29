import httpStatus from 'http-status';
import mongoose from 'mongoose';
import { ENUM_USER_ROLE } from '../../../enums/user';
import ApiError from '../../../errors/ApiError';
import { Admin } from '../admin/admin.model';
import { JobSeeker } from '../jobSeeker/jobSeeker.model';
import { Organization } from '../organization/organization.model';
import { IUser } from './user.interface';
import { User } from './user.model';

const createJobSeeker = async (user: IUser): Promise<IUser | null> => {
  const jobSeeker = { ...user };
  // set Role
  user.role = ENUM_USER_ROLE.JOB_SEEKER;

  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // create job seeker
    const newJobSeeker = await JobSeeker.create([jobSeeker], { session });

    if (!newJobSeeker.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create Job Seeker');
    }

    user.jobSeeker = newJobSeeker[0]._id;
    // create user
    const newUser = await User.create([user], { session });
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({
      email: newUserAllData.email,
    }).populate('jobSeeker');
  }

  return newUserAllData;
};

const createOrganization = async (user: IUser): Promise<IUser | null> => {
  const organization = { ...user };
  // set Role
  user.role = ENUM_USER_ROLE.ORGANIZATION;

  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // create job seeker
    const newAdmin = await Organization.create([organization], {
      session,
    });

    if (!newAdmin.length) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        'Failed to create Organization'
      );
    }

    user.organization = newAdmin[0]._id;
    // create user
    const newUser = await User.create([user], { session });
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({
      email: newUserAllData.email,
    }).populate('organization');
  }

  return newUserAllData;
};

const createAdmin = async (user: IUser): Promise<IUser | null> => {
  const admin = { ...user };
  // set Role
  user.role = ENUM_USER_ROLE.ADMIN;
  // set needs profile update false
  user.needsProfileUpdate = false;

  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // create job seeker
    const newAdmin = await Admin.create([admin], {
      session,
    });

    if (!newAdmin.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create Admin');
    }

    user.admin = newAdmin[0]._id;
    // create user
    const newUser = await User.create([user], { session });
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({
      email: newUserAllData.email,
    }).populate('admin');
  }

  return newUserAllData;
};

const getUserRole = async (email: string) => {
  const result = await User.findOne({ email: email }, { role: 1 });
  return result;
};

export const UserService = {
  createJobSeeker,
  createOrganization,
  createAdmin,
  getUserRole,
};
