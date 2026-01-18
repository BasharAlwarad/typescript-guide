const CeoObject = {
  name: 'Bill',
  company: 'Amazon',
};
CeoObject.name = 'John';

// function toUpperName(names: readonly string[]) {
function toUpperName(names: ReadonlyArray<string>) {
  //   names.push('Mike');
  return names.map((e) => {
    return e.toUpperCase();
  });
}

type Position = 'Programer' | 'Manager' | 'HR' | 'Scrum manager';
type Employee = { name: string; position: Position };

function paySalary(emp: Employee) {
  console.log(`${emp.name} at position ${emp.position} salary is 10000`);
}

const john = {
  name: 'John',
  position: 'Programer',
} as const;

paySalary(john);
