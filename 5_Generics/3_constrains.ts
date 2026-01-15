type objectWithTeam = {
  team: string;
};
type Programmer = objectWithTeam & {
  name: string;
  language: string;
};

// function updateTeam(arg: objectWithTeam, newTeam: string) {
//   arg.team = newTeam;
// }
function updateTeam<T extends objectWithTeam>(arg: T, newTeam: string): T {
  arg.team = newTeam;
  return arg;
}
let emp1: Programmer = {
  name: 'john',
  language: 'typescript',
  team: 'A',
};
updateTeam(emp1, 'team A');

// example

enum Languages {
  js,
  php,
  c,
}
// type OldSchoolProgrammer<T extends Languages = Languages.c> = {
type OldSchoolProgrammer<T extends 'js' | 'php' | 'c' = 'c'> = {
  language: T;
  name: string;
};

// const oldJohn: OldSchoolProgrammer<Languages.js> = {
const oldJohn: OldSchoolProgrammer = {
  //   language: Languages.c,
  language: 'c',
  name: 'John',
};
