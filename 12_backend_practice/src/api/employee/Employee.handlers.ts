import type { Request, Response, NextFunction } from 'express';
import type { Employee } from './Employee.model.js';

const employee: Employee = {
  id: '123',
  name: 'John',
  position: 'CEO',
  salary: 7000,
};
export const getEmployee = (
  _req: Request,
  res: Response<Employee[] | undefined>,
  next: NextFunction
) => {
  try {
    res.json([employee]);
  } catch (error) {
    next(error);
  }
};

export const getById = (
  req: Request<{ id: string }>,
  res: Response<Employee | undefined>,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    res.json(employee);
  } catch (error) {
    next(error);
  }
};

type EmployeeWithID = {
  id: string;
};

export const createEmployee = (
  req: Request<{}, EmployeeWithID>,
  res: Response<Employee | undefined>,
  next: NextFunction
) => {
  try {
    const { user } = req.body;
    res.json(employee);
  } catch (error) {
    next(error);
  }
};
