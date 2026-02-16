type Position = 'CEO' | 'HR' | 'PR';

export type Employee = {
  id: string;
  name: string;
  position: Position;
  salary: number;
};
