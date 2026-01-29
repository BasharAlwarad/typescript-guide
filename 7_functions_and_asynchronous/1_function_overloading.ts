function oneYearAgo(date: Date): Date;
function oneYearAgo(date: string): string;

function oneYearAgo(date: Date | string) {
  const oneYearAgo = new Date(date);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  if (typeof date === 'string') {
    return oneYearAgo.toLocaleDateString();
  } else {
    return oneYearAgo;
  }
}

const lastYearDate = oneYearAgo(new Date());
const lastYearString = oneYearAgo('1/1/2020');

//////////////////

function paySalary(monthlySalary: number): number;
function paySalary(
  monthlySalary: number,
  hoursOverTime: number,
  payPerHour: number
): number;

function paySalary(
  monthlySalary: number,
  hoursOverTime?: number,
  payPerHour?: number
) {
  let overTimePay = 0;
  if (hoursOverTime && payPerHour) {
    overTimePay = hoursOverTime * payPerHour;
  }
  return monthlySalary + overTimePay;
}

paySalary(5000);
paySalary(5000, 10, 10);
// @ts-expect-error
paySalary(5000, 10);

//////////

function paySalaryWithOptionObject(
  monthlySalary: number,
  overTime?: { hoursOverTime: number; payPerHour: number }
) {}
