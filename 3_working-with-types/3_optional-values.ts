type BonusSalary = 10 | 20 | 30;
type MonthlySalary = {
  amount: number;
  currency: 'USD' | 'EUR';
  yearlyBonus?: BonusSalary;
};

type Employee0 = {
  name: string;
  salary: MonthlySalary;
};

const johnSalary: Employee0 = {
  name: 'John',
  salary: {
    amount: 5000,
    currency: 'EUR',
  },
};
