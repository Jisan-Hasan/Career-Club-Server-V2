import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { jobSearchableFields } from './job.constant';
import { IJob, IJobFilters } from './job.interface';
import { Job } from './job.model';

const createJob = async (payload: IJob): Promise<IJob | null> => {
  const result = (await Job.create(payload)).populate('category');
  return result;
};

const updateJob = async (
  id: string,
  payload: Partial<IJob>
): Promise<IJob | null> => {
  const result = await Job.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  }).populate('category');
  return result;
};

const getAllJobs = async (
  filters: IJobFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IJob[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: jobSearchableFields.map(field => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Job.find(whereConditions)
    .populate('category')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Job.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleJob = async (id: string): Promise<IJob | null> => {
  const result = await Job.findById(id).populate('category');
  return result;
};

const deleteJob = async (id: string): Promise<IJob | null> => {
  const result = await Job.findByIdAndDelete(id).populate('category');
  return result;
};

export const JobService = {
  createJob,
  updateJob,
  getAllJobs,
  getSingleJob,
  deleteJob,
};
