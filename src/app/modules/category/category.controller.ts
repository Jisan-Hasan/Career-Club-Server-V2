import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { categoryFilterableFields } from './category.constant';
import { ICategory } from './category.interface';
import { CategoryService } from './category.service';

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const { ...categoryData } = req.body;
  const result = await CategoryService.createCategory(categoryData);

  sendResponse<ICategory>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category Created Successfully',
    data: result,
  });
});

const updateCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.updateCategory(id, req.body);

  sendResponse<ICategory>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category Updated Successfully',
    data: result,
  });
});

const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, categoryFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await CategoryService.getAllCategories(
    filters,
    paginationOptions
  );

  sendResponse<ICategory[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

//   const getSinglePackage = catchAsync(async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const result = await PackageService.getSinglePackage(id);

//     sendResponse<IPackage>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Package retrieved successfully',
//       data: result,
//     });
//   });

//   const deletePackage = catchAsync(async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const result = await PackageService.deletePackage(id);

//     sendResponse<IPackage>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Package deleted successfully',
//       data: result,
//     });
//   });

export const CategoryController = {
  createCategory,
  updateCategory,
  getAllCategories,
};
