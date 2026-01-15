type Employee1 = {
  name: string;
  email: string;
};
type Employee2 = Employee1 & {
  phone: number;
  location?: { city: string; country: string; postalCode: number };
};

let employee2: Employee2 = {
  name: 'John',
  email: 'john@gmail.com',
  phone: 123123,
  location: { city: 'Berlin', country: 'Germany', postalCode: 123 },
};
