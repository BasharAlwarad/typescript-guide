// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 1000);
// console.log(3);

async function getEmployee() {
  const employee = {
    name: 'john',
    position: 'HR',
  };
  return Promise.resolve(employee);
}

let x: { name: string; position: string };
// getEmployee()
//   .then((e) => {
//     x = e;
//   })
//   .then(() => {
//     console.log(x);
//   });

// getEmployee().then((e) => console.log(e));

async function wrapper() {
  console.log(await getEmployee());
}
wrapper();
