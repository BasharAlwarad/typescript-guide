type CEO = 'John';
type Founder = 'Jane';
type Board = CEO & Founder;

type NeverType = string & number;

function neverReturn(): never {
  while (true) {}
}
