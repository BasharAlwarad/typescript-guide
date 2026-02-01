/* 
- npm init -y
- tsc --init
- configure tsconfig.json
    . "types": ["node"]
    . "rootDir": "./src",
    . "outDir": "./dist",
    . "traceResolution": true,
- npm i -D typescript @types/node
- add index.ts
- configure npm scripts to have 
        
*/

import { randomUUID } from 'crypto';
import { type Employee, printEmployee } from './utils.js';
import { type MySpecialType, sayHey } from '@superUtils';

const x: Employee = {
  name: 'jane',
};

printEmployee(x);
console.log(randomUUID());
