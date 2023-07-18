import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { PackageController } from './package.controller';
import { PackageValidation } from './package.validation';

const router = express.Router();

router.post(
  '/create-package',
  validateRequest(PackageValidation.createPackageZodSchema),
  PackageController.createPackage
);

router.patch(
  '/:id',
  validateRequest(PackageValidation.updatePackageZodSchema),
  PackageController.updatePackage
);

router.get('/:id', PackageController.getSinglePackage);

router.get('/', PackageController.getAllPackages);

// router.delete(
//   '/:id',
//   auth(ENUM_USER_ROLE.SUPER_ADMIN),
//   AcademicDepartmentController.deleteDepartment
// );

export const PackageRoutes = router;
