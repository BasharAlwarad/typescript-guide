@sealed
@withEmploymentDate
@withEmploymentDateProtoType
class Manager {
  task: string = 'simple task';
  project: string = 'simple project';
  constructor() {
    console.log(`Initializing the manager class ${this.task} ${this.project}`);
  }
}

function withEmploymentDateProtoType(arg: Function) {
  arg.prototype.employmentDateProtoType = new Date().toISOString();
}

function withEmploymentDate<T extends { new (...args: any[]): {} }>(
  baseClass: T
) {
  return class extends baseClass {
    employmentDate = new Date().toISOString();
    constructor(...args: any[]) {
      super(...args);
      console.log(`adding employment date: ${this.employmentDate}`);
    }
  };
}

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

console.log(new Manager());
