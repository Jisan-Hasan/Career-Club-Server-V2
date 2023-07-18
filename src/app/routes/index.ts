import express from 'express';
import { PackageRoutes } from '../modules/package/package.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/package',
    route: PackageRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
