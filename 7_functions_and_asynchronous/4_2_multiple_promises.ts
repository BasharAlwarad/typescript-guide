async function getSalary(id: number) {
  console.log(`received a request for an id: ${id}`);
  const delay = id * 1000;
  await new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
  console.log(`Employee ${id} has a salary of ${10000}`);
  return 10000;
}

async function sequentialCalls() {
  console.time('Sequential calls');
  const emp1Salary = await getSalary(1);
  const emp2Salary = await getSalary(2);
  const emp3Salary = await getSalary(3);
  console.timeEnd('Sequential calls');
  const costWithTeam = emp1Salary + emp2Salary + emp3Salary;
  console.log('const With team' + costWithTeam);
}

async function parallelCalls() {
  console.time('Parallel call');
  const allSalaries = await Promise.all([
    getSalary(1),
    getSalary(2),
    getSalary(3),
  ]);
  let costWithTeam = allSalaries.reduce((a, b) => a + b);
  console.log('cost with team: ', costWithTeam);
  console.timeEnd('Parallel call');
}

sequentialCalls();
// parallelCalls();
