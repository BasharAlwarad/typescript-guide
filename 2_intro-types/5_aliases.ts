type Position = 'PR' | 'HR';
const position0: Position = 'HR';

type Employee = {
  name: 'John';
  age: number;
  position: Position;
  greetBack?: () => void;
};
const employee0: Employee = {
  name: 'John',
  age: 25,
  position: 'PR',
  greetBack: function () {
    console.log(`hello ${this.name}`);
  },
};
