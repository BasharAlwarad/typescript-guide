import { randomBytes } from 'crypto';

export type Employee = {
  name: string;
  id: string;
  email: string;
  salary: number;
};

function generateRandomId(): string {
  return randomBytes(8).toString('hex');
}

export function createEmployee(employeeName: string, salary: number): Employee {
  return {
    name: employeeName,
    id: generateRandomId(),
    email: `${employeeName}@company.com`,
    salary,
  };
}

const john = createEmployee('john', 50000);
const Mike = createEmployee('Mike', 50000);
const Jane = createEmployee('Jane', 50000);

const allEmployees = [john, Mike, Jane];

export const sendWelcomeMessage = (employee: Employee) => {
  return `To: ${employee.email}
  Hello ${employee.name}
  welcome to the company your salary is ${employee.salary}
  `;
};

allEmployees.forEach((e) => {
  sendWelcomeMessage(e);
});
