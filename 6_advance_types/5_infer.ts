function printArray(args: string[]) {
  args.forEach((arg, index) => console.log(`Arg at index ${index} is ${arg}`));
}
printArray(['1', '2', '3']);
type UnpackArr<T extends Array<any>> = T extends (infer R)[] ? R : never;
let someStringType: UnpackArr<string[]>;

type UnpackPromise<T extends Promise<any>> =
  T extends Promise<infer R> ? R : never;
let someStringType2: UnpackPromise<Promise<string>>;

type Unpack<T> = T extends (infer R)[] ? R : T extends Promise<infer R> ? R : T;
let someString: Unpack<string>;
let someStringFromArr: Unpack<string[]>;
let someStringFromPromise: Unpack<Promise<string>>;

////////////

type Employee3 = {
  name: string;
  age: number;
};

type EmployeeValues<T> = T extends { name: infer NAME; age: infer AGE }
  ? [NAME, AGE]
  : never;

let employeeValues: EmployeeValues<Employee3>;

////////////

type Position1Tech = 'TechHR' | 'TechPR' | 'TechProgramer';
type RemovePosition<T> = T extends `Tech${infer R extends string}` ? R : never;
type RemovePrefix<
  Prefix extends string,
  T,
> = T extends `${Prefix}${infer R extends string}` ? R : never;

type RegularPosition = RemovePosition<Position1Tech>;
type RegularPosition2 = RemovePrefix<'Tec', Position1Tech>;
