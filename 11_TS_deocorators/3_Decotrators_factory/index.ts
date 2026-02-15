@withDepartment('HR')
class Manager {
  task: string = 'simple task';
  project: string = 'simple project';
  constructor() {
    console.log(`Initializing the manager class ${this.task} ${this.project}`);
  }
}

function withDepartment(department: string) {
  return function <T extends { new (...args: any[]): {} }>(baseClass: T) {
    console.log('Invoke Decorate');
    return class extends baseClass {
      employmentDate = new Date().toISOString();
      department = department;
      constructor(...args: any[]) {
        super(...args);
        console.log(`adding employment date: ${this.employmentDate}`);
      }
    };
  };
}

console.log(new Manager());
