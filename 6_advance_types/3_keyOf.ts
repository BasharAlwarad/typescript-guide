type Jobs = 'HR' | 'PR' | 'Programer' | 'Scrum manager';
type Employee1 = {
  name: string;
  position: Jobs;
};

type EmployeesKeys = keyof Employee1; // name | position

const john1: Employee1 = {
  name: 'John',
  position: 'HR',
};

// function getProperty(arg:Employee1,key:string) {
function getProperty(arg: any, key: string) {
  console.log(arg[key]);
  return arg[key];
}
getProperty(john1, 'name');
getProperty(john1, 'position');
getProperty(john1, 'age');

// function getProperty2<T>(arg: T, key: keyof T) {
function getProperty2<T, K extends keyof T>(arg: T, key: K): T[K] {
  console.log(arg[key]);
  return arg[key];
}

getProperty2(john1, 'name');
getProperty2(john1, 'position');
// will throw error because 'age' is not keyof Employee1
// getProperty2(john1, 'age');

function getObjectKeys<T extends Object>(arg: T) {
  return Object.keys(arg);
}
const someKeys = getObjectKeys([]);
function getObjectKeys2<T extends Record<string, any>>(arg: T): Array<keyof T> {
  return Object.keys(arg);
}

const someKeys2 = getObjectKeys2([]);
const existingKeys = getObjectKeys2([{ abc: 'abc' }]);
