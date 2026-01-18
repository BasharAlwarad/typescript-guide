type Position1 = 'HR' | 'PR' | 'CEO' | 'CTO';
type PositionDuties = {
  HR: string[];
  PR: string[];
  CEO: string[];
  CTO: string[];
};

type PositionDutiesMap = {
  [position in Position1]: string[];
};

type PositionDutiesMapGeneric<T extends string> = {
  [key in T]: string[];
};

type MirrorGenericType<T> = T;

type MirrorMapType<T> = {
  [key in keyof T]: T[key];
};

type Employee = {
  name: string;
  age: number;
};
type Tech<T> = {
  [key in keyof T as `tech${Capitalize<string & key>}`]: T[key];
};

type TechEmployee = Tech<Employee>;

type ReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};

type ReadOnlyEmployee = ReadOnly<TechEmployee>;

type Mutable<T> = {
  -readonly [key in keyof T]: T[key];
};

type MutableEmployee = Mutable<ReadOnlyEmployee>;
