import httpStatus from 'http-status';
import mongoose from 'mongoose';
import { ENUM_USER_ROLE } from '../../../enums/user';
import ApiError from '../../../errors/ApiError';
import { JobSeeker } from '../jobSeeker/jobSeeker.model';
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

export const UserService = { createJobSeeker };
