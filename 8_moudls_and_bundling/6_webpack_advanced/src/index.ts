import { v4 } from 'uuid';
import { User, createUser } from './utils';

const john: User = { name: 'John' };

createUser(john);
console.log(v4());
