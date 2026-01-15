function toArr<T>(arg: T): T[] {
  return [arg];
}
const nameArr = toArr<string>('John');
const numberArr = toArr<number>(1);
