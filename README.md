# TypeScript Basics – Lecture 2

This lecture covers the essentials for getting started with TypeScript code, compiling and running it, using an online playground, and understanding basic compiler options.

## Writing a Basic TypeScript Program

Create a file called `src/index.ts` and add your TypeScript code. Example:

```typescript
const message: string = 'Hello, TypeScript!';
console.log(message);
```

## Running TypeScript Code

### 1. Compile TypeScript to JavaScript

```bash
tsc index.ts
```

This will generate an `index.js` file in the same directory.

### 2. Run TypeScript Directly (Optional)

Install [tsx](https://github.com/esbuild/tsx) globally:

```bash
npm i -g tsx
```

Then run your TypeScript file:

```bash
tsx index.ts
```

## Online Playground

Try TypeScript instantly in your browser:

[TypeScript Playground](https://www.typescriptlang.org/play/?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA)

## Compiler Options

Initialize a TypeScript project with recommended options:

```bash
tsc --init
```

Edit your `tsconfig.json` to set the source and output directories:

```json
{
  "rootDir": "./src",
  "outDir": "./dist"
}
```

This will keep your source files in `src/` and compiled JavaScript in `dist/`.
