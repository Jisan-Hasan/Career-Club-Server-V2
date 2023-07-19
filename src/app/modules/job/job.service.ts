import { IJob } from './job.interface';
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

/* 


const getAllPackages = async (
  filters: IPackageFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IPackage[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: packageSearchableFields.map(field => ({
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

  const result = await Package.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Package.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSinglePackage = async (id: string): Promise<IPackage | null> => {
  const result = await Package.findById(id);
  return result;
};

const deletePackage = async (id: string): Promise<IPackage | null> => {
  const result = await Package.findByIdAndDelete(id);
  return result;
};

*/

export const JobService = { createJob ,updateJob};
