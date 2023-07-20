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

/* 


router.patch(
  '/:id',
  validateRequest(JobValidation.updateJobZodValidation),
  JobController.updateJob
);

router.get('/:id', JobController.getSingleJob);

router.delete('/:id', JobController.deleteJob);

router.get('/', JobController.getAllJobs); 
*/

export const ApplicationRoutes = router;
