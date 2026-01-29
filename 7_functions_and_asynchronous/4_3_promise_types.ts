async function getEmployee(): Promise<object[]> {
  return Promise.resolve([
    {
      name: 'john',
      position: 'CEO',
      salary: 10000,
    },
  ]);
}

async function wrapper() {
  const employees = await getEmployee();
}
type EmpServiceReturnType = Awaited<ReturnType<typeof getEmployee>>;

function getService() {
  return Promise.resolve('something');
}
async function resolveServiceFirst<T>(service: Promise<T>) {
  console.time('start time');
  const result = await service;
  console.log(result);
  console.timeEnd('start time');
}

resolveServiceFirst(getService());

////////////////////
type NestedPromise<T> = Promise<Promise<Promise<T>>>;
type InsidePromise<T> = Awaited<NestedPromise<T>>;

let uncleanPromise: InsidePromise<string>;
