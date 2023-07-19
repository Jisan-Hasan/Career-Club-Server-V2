import express from 'express';
import { CategoryRoutes } from '../modules/category/category.route';
import { PackageRoutes } from '../modules/package/package.route';
import { JobRoutes } from '../modules/job/job.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/package',
    route: PackageRoutes,
  },
  {
    path: '/category',
    route: CategoryRoutes,
  },
  {
    path: '/job',
    route: JobRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
