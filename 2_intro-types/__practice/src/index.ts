import { randomBytes } from 'crypto';

function generateRandomId() {
  return randomBytes(10).toString('hex');
}
console.log(generateRandomId());

type Employee = {
  name: string;
  id: string;
  email: string;
  salary: number;
};
function createEmployee(name: string, salary: number): Employee {
  return { name, id: generateRandomId(), email: `${name}@gmail.com`, salary };
}
