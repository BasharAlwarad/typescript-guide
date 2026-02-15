@printDecoratorData
class Manager {
  task: string = 'simple task';
  project: string = 'simple project';
  constructor() {
    console.log(`Initializing the manager class ${this.task} ${this.project}`);
  }
}

function printDecoratorData(value: Function, context: ClassDecoratorContext) {
  console.log('Value: ');
  console.log(value);
  console.log('context: ');
  console.log(context);
  context.addInitializer(() => {
    console.log('Initialize Class' + context.name);
  });
}

console.log(new Manager());
