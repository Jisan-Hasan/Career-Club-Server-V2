import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './category.controller';
import { CategoryValidation } from './category.validation';

const router = express.Router();

router.post(
  '/create-category',
  validateRequest(CategoryValidation.createCategoryZodSchema),
  CategoryController.createCategory
);

router.patch(
  '/:id',
  validateRequest(CategoryValidation.updateCategoryZodSchema),
  CategoryController.updateCategory
);

//   router.get('/:id', PackageController.getSinglePackage);

//   router.delete('/:id', PackageController.deletePackage);

router.get('/', CategoryController.getAllCategories);

export const CategoryRoutes = router;
