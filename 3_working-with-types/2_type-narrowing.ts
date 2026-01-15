type Customer = 'customer';
type Admin = 'admin';
type Employee = 'employee';
type Role = Customer | Admin | Employee | 'CEO';

function grantAccess(position: Role | unknown): boolean | undefined {
  if (typeof position !== 'string') {
    console.log('cant accept this param');
  }
  if (position === 'customer') {
    return false;
  }
  if (position === 'admin' || position === 'employee' || position === 'CEO') {
    return true;
  }
  console.log('invalid role');
  return undefined;
}

// type predicate
type Salary = {
  amount: number;
};
function isSalary(arg: any): arg is Salary {
  return 'amount' in arg && typeof arg.amount === 'number';
}

function paySalary(arg: unknown): void {
  if (isSalary(arg)) {
    console.log(`paying ${arg.amount}`);
  }
}
