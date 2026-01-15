// type inference
const fruits0 = ['apple', 'banana', 'strawberry'];
// Array annotation
const fruits1: string[] = ['apple', 'banana', 'strawberry'];
// Array generic
const fruits2: Array<string> = ['apple', 'banana', 'strawberry'];
// Array with mixed types
const fruits3: (string | number)[] = ['apple', 1, 'strawberry', 2];
// Array of objects
const fruits4: { name: string; quantity: number }[] = [
  { name: 'apple', quantity: 5 },
  { name: 'banana', quantity: 10 },
  { name: 'strawberry', quantity: 15 },
];
// Array using interface
interface IFruit {
  name: string;
  quantity: number;
}
const fruits5: IFruit[] = [
  { name: 'apple', quantity: 5 },
  { name: 'banana', quantity: 10 },
  { name: 'strawberry', quantity: 15 },
];
// Array using type alias
type FruitType = {
  name: string;
  quantity: number;
};
const fruits6: FruitType[] = [
  { name: 'apple', quantity: 5 },
  { name: 'banana', quantity: 10 },
  { name: 'strawberry', quantity: 15 },
];
// Readonly array
const fruits7: ReadonlyArray<string> = ['apple', 'banana', 'strawberry'];
// Tuple array
const fruits8: [string, number][] = [
  ['apple', 5],
  ['banana', 10],
  ['strawberry', 15],
];
// Multidimensional array
const fruits9: string[][] = [
  ['apple', 'banana'],
  ['strawberry', 'kiwi'],
  ['mango', 'pineapple'],
];
// Array with union types
const fruits10: Array<string | number | boolean> = [
  'apple',
  1,
  'banana',
  true,
  'strawberry',
  2,
  false,
];
// Empty array with type annotation
const fruits11: string[] = [];
// Array with default values
const fruits12: string[] = new Array('apple', 'banana', 'strawberry');
// Array using Array.of
const fruits13: string[] = Array.of('apple', 'banana', 'strawberry');
// Array using spread operator
const moreFruits: string[] = ['kiwi', 'mango'];
const fruits14: string[] = ['apple', 'banana', ...moreFruits];
// Array using Array.from
const fruits15: string[] = Array.from(['apple', 'banana', 'strawberry']);
// Readonly tuple array
const fruits16: ReadonlyArray<[string, number]> = [
  ['apple', 5],
  ['banana', 10],
  ['strawberry', 15],
];
// Array with optional properties in objects
const fruits17: { name: string; quantity?: number }[] = [
  { name: 'apple', quantity: 5 },
  { name: 'banana' },
  { name: 'strawberry', quantity: 15 },
];
// Array with nested objects
const fruits18: {
  name: string;
  details: { quantity: number; origin: string };
}[] = [
  { name: 'apple', details: { quantity: 5, origin: 'USA' } },
  { name: 'banana', details: { quantity: 10, origin: 'Ecuador' } },
  { name: 'strawberry', details: { quantity: 15, origin: 'Mexico' } },
];
// Array with function types
const fruits19: Array<() => string> = [
  () => 'apple',
  () => 'banana',
  () => 'strawberry',
];
// Array with enum types
enum FruitEnum {
  Apple,
  Banana,
  Strawberry,
}
const fruits20: FruitEnum[] = [
  FruitEnum.Apple,
  FruitEnum.Banana,
  FruitEnum.Strawberry,
];
