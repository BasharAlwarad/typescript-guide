type Employee2 = {
  name: string;
  salary: number;
};
function hasBigSalary(emp: Employee2) {
  return emp.salary > 5000;
}

const john2: Employee2 = { name: 'John', salary: 10000 };
const bonus = hasBigSalary(john2) ? 2000 : 3000;

type Intern = {
  name: string;
  tasks: string[];
};
type SalaryOf<T> = T extends { salary: number } ? Array<T['salary']> : never;

let someSalary: SalaryOf<Employee2>;
let internSalary: SalaryOf<Intern>;

type ArrayOfSalaries<T> = T extends Employee2
  ? T['salary']
  : T extends number
    ? T[]
    : never;

let employeesSalaryArray: ArrayOfSalaries<Employee2>;
let simpleSalariesArray: ArrayOfSalaries<number>;

// distributive conditional types
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumber = ToArray<string | number>;
const numberArray: StrArrOrNumber = [1, 2, 3];
// this will throw an error because "" is not a number
// numberArray.push("")
const shouldBeNumber = numberArray[0];
