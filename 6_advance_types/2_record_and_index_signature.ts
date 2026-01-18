type Employees = {
  // name: string;
  // position: string;
  [key: string]: string;
};

const john: Employees = {
  name: 'John',
  position: 'j@gmail.com',
  email: 'j@gmail.com',
};

type EmployeesDictionary = {
  [id: string]: Employees;
};

const employees: EmployeesDictionary = {
  johnId: john,
};

const employeesRecord: Record<string, Employees> = {
  johnId: john,
};

type Positions = 'Hr' | 'PR' | 'Programer' | 'scrum manager';
type PositionsSalaries = Record<Positions, { salary: number }>;

const salaries: PositionsSalaries = {
  PR: { salary: 5000 },
  Hr: { salary: 5000 },
  Programer: { salary: 5000 },
  'scrum manager': { salary: 5000 },
};
