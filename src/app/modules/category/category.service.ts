import { ICategory } from './category.interface';
import { Category } from './category.model';

const createCategory = async (
  payload: ICategory
): Promise<ICategory | null> => {
  const result = await Category.create(payload);
  return result;
};

const updateCategory = async (
  id: string,
  payload: Partial<ICategory>
): Promise<ICategory | null> => {
  const result = await Category.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

//   const getAllPackages = async (
//     filters: IPackageFilters,
//     paginationOptions: IPaginationOptions
//   ): Promise<IGenericResponse<IPackage[]>> => {
//     const { limit, page, skip, sortBy, sortOrder } =
//       paginationHelpers.calculatePagination(paginationOptions);
//     const { searchTerm, ...filtersData } = filters;

//     const andConditions = [];

//     if (searchTerm) {
//       andConditions.push({
//         $or: packageSearchableFields.map(field => ({
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

//     const result = await Package.find(whereConditions)
//       .sort(sortConditions)
//       .skip(skip)
//       .limit(limit);

//     const total = await Package.countDocuments(whereConditions);

//     return {
//       meta: {
//         page,
//         limit,
//         total,
//       },
//       data: result,
//     };
//   };

//   const getSinglePackage = async (id: string): Promise<IPackage | null> => {
//     const result = await Package.findById(id);
//     return result;
//   };

//   const deletePackage = async (id: string): Promise<IPackage | null> => {
//     const result = await Package.findByIdAndDelete(id);
//     return result;
//   };

export const CategoryService = {
  createCategory,
  updateCategory,
};
