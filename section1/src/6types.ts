type Department = 'PR' | 'HR' | 'Media' | 'finance' | 'management';
type Role = 'Manager' | 'Employee' | 'Intern' | 'Instructor';
type Address = {
  country: string;
  city: string;
  street: string;
  building: number;
  zipCode: number;
};

type User = {
  address: Address;
  name: string;
  salary: number;
  birth: Date;
};
type Employee = User & {
  department: Department;
  role: Role;
};

type CIO = Employee & {
  department: 'management';
  role: 'Manager';
};

const mike: CIO = {
  name: 'Mike',
  department: 'management',
  role: 'Manager',
  salary: 555,
  birth: new Date(),
  address: {
    country: 'Germany',
    city: 'Hannover',
    street: 'Steintor',
    building: 1,
    zipCode: 30950,
  },
};
const john: Employee = {
  name: 'john',
  department: 'HR',
  role: 'Employee',
  salary: 60000,
  birth: new Date(),
  address: {
    country: 'Germany',
    city: 'Hannover',
    street: 'Steintor',
    building: 1,
    zipCode: 30950,
  },
};

type X = {
  name: string;
};
type Y = {
  age: number;
};
type Z = X &
  Y & {
    password: string;
    randomNumber: number;
  };

const person: Z = {
  name: 'John',
  age: 22,
  password: 'sdfasdf',
  randomNumber: Math.random(),
};
