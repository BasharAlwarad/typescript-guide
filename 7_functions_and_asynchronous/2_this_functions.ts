// @ts-ignore
// console.log(global);

this.fromGlobalContext = 'Global Context';

const context = () => {
  function printThisFunction() {
    // @ts-ignore
    console.log(this);
  }

  const printThisArrowFunction = () => {
    // @ts-ignore
    console.log(this);
  };
  const foo = 'bar';

  return {
    printThisFunction,
    printThisArrowFunction,
    foo,
  };
};

context().printThisFunction();
context().printThisArrowFunction();
