// generics example
const names0: string[] = ['John'];
const names1: Array<string> = ['John'];

type Employee = {
  name: string;
  email: string;
};

// async function getEmployees<T>(url: string): Promise<T> {
// async function getEmployees<T>(url: string): Promise<Array<T>> {
async function getEmployees<T>(url: string): Promise<T[]> {
  const result = await fetch(url);
  const resultParsed = await result.json();
  return resultParsed;
}

async function wrapper() {
  const employees = await getEmployees<Employee>('internalServer.com');
}
