enum Position {
  /**
   *Human resources department
   */
  HR,
  /**
   * Public relation department
   */
  PR,
  /**
   * this the head of the company
   */
  CEO,
}

type Employee = {
  name: string;
  email: string;
  position: Position;
};

function createEmployee(emp: Employee) {
  if (emp.position === Position.CEO) {
    console.log(`${emp.name} is the CEO of the company`);
  }
  if (emp.position === Position.HR) {
    console.log(`${emp.name} works for HR department`);
  }
  if (emp.position === Position.PR) {
    console.log(`${emp.name} works for PR department`);
  }
}
