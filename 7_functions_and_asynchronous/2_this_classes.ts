class Manager {
  private name: string;
  private tasks: string[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addTask(task: string) {
    this.tasks.push(task);
  }
  printTaskWithArrowFunction() {
    this.tasks.forEach((task) => {
      console.log(task + ' belongs to ' + this.name);
    });
  }
  printTasksWithRegularFunction() {
    function printTasks(name: string, tasks: string[]) {
      tasks.forEach((task) => {
        console.log(task + ' belongs to ' + name);
      });
    }
    printTasks(this.name, this.tasks);
  }
}
