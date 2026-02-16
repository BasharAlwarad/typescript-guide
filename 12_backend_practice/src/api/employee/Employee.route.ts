import { Router } from 'express';

import { getEmployee, getById } from './Employee.handlers.js';

const EmployeeRouter = Router();

EmployeeRouter.get(`/`, getEmployee);
EmployeeRouter.get(`/:id`, getById);

export default EmployeeRouter;
