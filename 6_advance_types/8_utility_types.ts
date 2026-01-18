type Employee1 = {
  name: string;
  age: string;
  position: string;
  salary: {
    amount: number;
    currency: string;
    bonus?: 10 | 20 | 30;
  };
  isAdmin: boolean;
  employedAt: string;
  likesMeetings?: boolean;
  team?: string;
};

type RequiredAllEmployee = Required<Employee1>;
type OptionalAllEmployee = Partial<Employee1>;
type ReadOnlyAllEmployee = ReadOnly<Employee1>;
type ReadOnlyRequiredAllEmployee = ReadOnly<Required<Employee1>>;

// Pick
type SalaryPick = Pick<Employee1, 'salary'>;
type SalaryEmployee = Employee1['salary'];
// Omit
type SanitizedEmployee = Omit<Employee1, 'age'> & { age: string };

function getSalaryHistory(id: string) {
  return {
    formerEmployee: 'Google',
    formerPosition: 'CEO',
    formerSalary: 10000,
    previousDuties: ['invent', 'research'],
  };
}

type PreviousPosition = ReturnType<typeof getSalaryHistory>;
