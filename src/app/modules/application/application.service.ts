import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { applicationSearchableFields } from './application.constant';
import { IApplication, IApplicationFilters } from './application.interface';
import { Application } from './application.model';

const createApplication = async (
  payload: IApplication
): Promise<IApplication | null> => {
  const result = (await Application.create(payload)).populate('job');
  return result;
};

const getAllApplications = async (
  filters: IApplicationFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IApplication[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: applicationSearchableFields.map(field => ({
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

  const result = await Application.find(whereConditions)
    .populate('job')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Application.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleApplication = async (
  id: string
): Promise<IApplication | null> => {
  const result = await Application.findById(id).populate('job');
  return result;
};

const deleteApplication = async (id: string): Promise<IApplication | null> => {
  const result = await Application.findByIdAndDelete(id).populate('job');
  return result;
};

export const ApplicationService = {
  createApplication,
  getAllApplications,
  getSingleApplication,
  deleteApplication,
};
