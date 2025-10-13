type WithName = {
  name: String;
};

const createUser = (arg: WithName) => {
  console.log(arg.name);
};

createUser({ name: 'John' });
