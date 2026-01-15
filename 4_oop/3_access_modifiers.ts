class Employee {
  constructor(private name: string, protected email: string) {
    this.name = name;
    this.email = email;
  }
  printEmployeeDetails() {
    console.log(`Employee: ${this.name} email: ${this.email}`);
  }
}

class User extends Employee {
  constructor(name: string, email: string, public phone: number) {
    super(name, email);
    this.phone = phone;
  }
}

const employee1 = new Employee('john', 'john@gmail.com');
const user1 = new User('Jane', 'jane@gmail.com', 123);
(employee1 as any).name;
// next two lines will throw errors because of access modifiers properties is private and protected
// employee1.email;
// user1.email
employee1.printEmployeeDetails();
