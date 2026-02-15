/*
NOTES
1. decorators are always invoked once at the start of the program

*/

class Manager {
  // Property decorator: wires a getter/setter on `task` to observe changes.
  @watchChange
  task: string = 'Simple task';

  // Regular property without a decorator.
  project: string = 'Simple project';

  constructor() {
    // Runs when a `Manager` instance is created.
    console.log('Initializing the Manager class');
  }
}

function watchChange<T extends Object>(target: T, key: keyof T & string) {
  // Decorators run once at class definition time.
  console.log('Calling the watch change decorator');

  // Capture the initial value on the prototype for this property.
  let property = target[key];

  // Getter returns the stored value.
  const getter = () => {
    return property;
  };

  // Setter logs changes and updates the stored value.
  const setter = (newVal: any) => {
    console.log(`${key} changed from ${property} to ${newVal}`);
    property = newVal;
  };

  // Replace the property with a custom getter/setter.
  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    configurable: true,
    enumerable: true,
  });
}

// Create an instance (constructor runs here).
const manager = new Manager();

// Manually apply the decorator logic to `project` (not using @ on it).
watchChange(manager, 'project');

// Triggers the custom setter and logs the change.
manager.project = 'Complicated project';
