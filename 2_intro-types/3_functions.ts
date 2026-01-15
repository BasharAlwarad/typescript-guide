// function type inference
function greet0(n: string) {
  console.log('Hello ' + n);
}
// default value
function greet1(n = 'John') {
  console.log('Hello ' + n);
}
// multiple params
function greet2(...n: string[]) {
  n.forEach((e) => {
    console.log('Hello ' + e);
  });
}
