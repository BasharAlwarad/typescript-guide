# typescript-guide

A comprehensive guide to learning TypeScript through practical examples, covering both frontend (React) and backend (Express) development.

This branch serves as the introduction: what you need before starting, what to learn first, and a short history of TypeScript—why it exists and who created it.

## Table of contents

- Prerequisites (what you need)
- What to learn first (learning path)
- History of TypeScript (who, why, and when)

---

## Prerequisites (what you need)

Before diving in, make sure you are comfortable with:

- JavaScript fundamentals (ES6+): variables, functions, arrays/objects, classes, modules, promises, async/await
- Node.js and npm installed (LTS version recommended)
- A code editor (VS Code is recommended)
- Basic Git and command-line usage

Nice to have (optional):

- Basic HTML/CSS knowledge (for frontend examples)
- Familiarity with a testing framework (Jest/Vitest) and a linter/formatter (ESLint/Prettier)

If you’re new to JavaScript, spend a little time refreshing modern JS (ES6+) first—TypeScript builds directly on top of it.

## What to learn first (learning path)

Here’s a suggested path to get productive quickly:

1) Refresh modern JavaScript
	- let/const, arrow functions, destructuring, rest/spread
	- modules (import/export), async/await, promises
	- arrays/objects, classes, this/scope

2) TypeScript basics
	- Compiler and config: tsc, tsconfig.json, target/module, strict mode
	- Core types: string, number, boolean, null/undefined, void, unknown, any, never
	- Objects and collections: arrays, tuples, enums, readonly
	- Unions and intersections, literal types, type narrowing (typeof, in, instanceof, control-flow analysis)
	- Functions: parameter/return types, optional and default params, overloads
	- Type aliases vs interfaces, module augmentation basics
	- Generics (intro): generic functions and interfaces

3) Working with existing JavaScript
	- Gradual typing and incremental adoption
	- Using DefinitelyTyped (@types/...) for third-party libraries
	- JSDoc types in JS files when you can’t convert to TS yet

4) Tooling and DX (developer experience)
	- Running TS: ts-node/tsx for quick scripts
	- Bundling/building: tsup, esbuild, Vite, SWC
	- Linting/formatting: ESLint with @typescript-eslint, Prettier
	- Testing: Vitest or Jest with ts setup

5) Framework usage
	- React + TypeScript: props, state, component patterns, hooks typing
	- Node/Express + TypeScript: types for requests/responses, middleware, error handling

6) Advanced TypeScript (as you grow)
	- Advanced generics, conditional types, mapped types, utility types
	- Template literal types, key remapping, type predicates, satisfies operator
	- Project references and build strategies for monorepos

This repository will add hands-on examples for each step in future branches/chapters.

## History of TypeScript (who, why, and when)

- Who created it: TypeScript was created at Microsoft, led by Anders Hejlsberg (also known for Turbo Pascal, Delphi, and C#).
- When: The first public release was in 2012, with TypeScript 1.0 arriving in 2014.
- Why it was created: As JavaScript applications grew larger and more complex, teams needed better tooling, static analysis, and maintainability. TypeScript adds a static type system and modern language features on top of JavaScript, enabling earlier error detection, clearer APIs, and stronger editor support—while compiling down to plain JavaScript that runs everywhere.

A few key motivations:

- Scale: Make large codebases and teams more productive and safer
- Tooling: Power IntelliSense, refactoring, and navigation in editors
- Compatibility: Embrace JavaScript and the web ecosystem; output standards-compliant JS
- Evolution: Provide modern features (and their types) even before all runtimes support them

Since its release, TypeScript has been widely adopted across the industry and frameworks (for example, Angular embraced TypeScript early), and it continues to evolve with the JavaScript standard.

---

Next, we’ll add setup instructions, examples, and exercises. If you have a specific area you’d like to see first (React, Node/Express, testing, or advanced types), open an issue or let’s add a new section.
