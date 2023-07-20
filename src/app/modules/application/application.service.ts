import { IApplication } from './application.interface';
import { Application } from './application.model';

const createApplication = async (
  payload: IApplication
): Promise<IApplication | null> => {
  const result = (await Application.create(payload)).populate('job');
  return result;
};

/* 
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
   */
export const ApplicationService = {
  createApplication,
};
