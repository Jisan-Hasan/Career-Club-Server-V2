import { IPackage } from './package.interface';
import { Package } from './package.model';

const createPackage = async (payload: IPackage): Promise<IPackage | null> => {
  const result = await Package.create(payload);
  return result;
};

const updatePackage = async (
  id: string,
  payload: Partial<IPackage>
): Promise<IPackage | null> => {
  const result = await Package.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

//   const getAllDepartments = async (
//     filters: IAcademicDepartmentFilters,
//     paginationOptions: IPaginationOptions
//   ): Promise<IGenericResponse<IAcademicDepartment[]>> => {
//     const { limit, page, skip, sortBy, sortOrder } =
//       paginationHelpers.calculatePagination(paginationOptions);

//     const { searchTerm, ...filtersData } = filters;

//     const andConditions = [];

//     if (searchTerm) {
//       andConditions.push({
//         $or: academicDepartmentSearchableFields.map(field => ({
//           [field]: {
//             $regex: searchTerm,
//             $paginationOptions: 'i',
//           },
//         })),
//       });
//     }

//     if (Object.keys(filtersData).length) {
//       andConditions.push({
//         $and: Object.entries(filtersData).map(([field, value]) => ({
//           [field]: value,
//         })),
//       });
//     }

//     const sortConditions: { [key: string]: SortOrder } = {};

//     if (sortBy && sortOrder) {
//       sortConditions[sortBy] = sortOrder;
//     }
//     const whereConditions =
//       andConditions.length > 0 ? { $and: andConditions } : {};

//     const result = await AcademicDepartment.find(whereConditions)
//       .populate('academicFaculty')
//       .sort(sortConditions)
//       .skip(skip)
//       .limit(limit);

//     const total = await AcademicDepartment.countDocuments(whereConditions);

//     return {
//       meta: {
//         page,
//         limit,
//         total,
//       },
//       data: result,
//     };
//   };

//   const getSingleDepartment = async (
//     id: string
//   ): Promise<IAcademicDepartment | null> => {
//     const result = await AcademicDepartment.findById(id).populate(
//       'academicFaculty'
//     );
//     return result;
//   };

//   const deleteDepartment = async (
//     id: string
//   ): Promise<IAcademicDepartment | null> => {
//     const result = await AcademicDepartment.findByIdAndDelete(id);
//     return result;
//   };

export const PackageService = { createPackage, updatePackage };
