import arrays = require('./arrays');
import functions = require('./functions');

const { greet5 } = functions;

type WithName = {
  name: string;
  age: bigint;
  today: Date;
};

let name = 'John';
let age = 50n;
let today = new Date();
console.log(today);

const createUser = (arg: WithName) => {
  console.log(arg.name, arg.age, arg.today);
};

createUser({ name, age, today });
console.log(arrays.duties);
console.log(greet5('John', 'Jane,Mike'));
