function greet1(name: string) {
  return `Hello ${name}`;
}
function greet2(name: string): string {
  return `Hello ${name}`;
}
const greet3 = (name: string) => {
  return `Hello ${name}`;
};
const greet4 = (name: string): string => {
  return `Hello ${name}`;
};
const greet5 = (...name: string[]): string[] => {
  let names: string[] = [];
  name.forEach((e) => {
    names.push(`Hello ${e}`);
  });
  return names;
};

export = { greet1, greet2, greet3, greet4, greet5 };
