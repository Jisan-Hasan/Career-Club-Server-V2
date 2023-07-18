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

router.delete('/:id', PackageController.deletePackage);

router.get('/', PackageController.getAllPackages);


export const PackageRoutes = router;
