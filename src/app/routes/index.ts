import express from 'express';
import { CategoryRoutes } from '../modules/category/category.route';
import { PackageRoutes } from '../modules/package/package.route';

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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
