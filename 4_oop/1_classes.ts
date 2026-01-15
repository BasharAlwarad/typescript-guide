class Project {
  name: string;
  budget: number;
  constructor(name: string, budget: number) {
    this.name = name;
    this.budget = budget;
  }
  printBudget() {
    console.log(`project ${this.name} has a budget of ${this.budget}`);
  }
}

class SecretProject extends Project {
  secretLevel: 1 | 2 | 3;
  constructor(secretLevel: 1 | 2 | 3) {
    super('Secret Project', 100000);
    this.secretLevel = secretLevel;
  }
  override printBudget(): void {
    console.log(
      `project ${this.name} is a secret project with a budget of ${this.budget} lever of secrecy is ${this.secretLevel}`
    );
  }
}
const project1 = new Project('x', 222);
const projectX = new SecretProject(1);
projectX.printBudget();

project1.printBudget();
