import express from 'express';
import type { Request, Response } from 'express';
import EmployeeRouter from './api/employee/Employee.route.js';

const PORT = 3000;
export class Server {
  private app = express();

  startSever() {
    this.app.get(`/hello`, (_req: Request, res: Response) => {
      res.send(`Hello`);
    });

    this.app.use(`/employees`, EmployeeRouter);

    this.app.listen(PORT, () =>
      console.log(`Server is running on port: ${PORT}`)
    );
  }
}

new Server().startSever();
