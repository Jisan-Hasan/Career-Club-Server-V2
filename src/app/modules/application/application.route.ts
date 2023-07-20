import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ApplicationController } from './application.controller';
import { ApplicationValidation } from './application.validation';

const router = express.Router();

router.post(
  '/create-application',
  validateRequest(ApplicationValidation.createApplicationZodValidation),
  ApplicationController.createApplication
);

router.get('/', ApplicationController.getAllApplications);
/* 

router.get('/:id', JobController.getSingleJob);

router.delete('/:id', JobController.deleteJob);

*/

export const ApplicationRoutes = router;
