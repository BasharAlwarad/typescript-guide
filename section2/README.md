## starting ts project with node package management npm

- create package.json

```bash
npm init -y
```

- add TypeScript as a dev dependency (local install)

```bash
npm install --save-dev typescript
```

- if you need Node types (common for node projects)

```bash
npm install --save-dev @types/node
```

- if you don't have a tsconfig.json, create one

```bash
npx tsc --init
```

- add a build script to package.json

```json
  "scripts": {
    "build": "tsc -p .",
    "dev": "tsx --watch ./src/index.ts"
  },
```

- run the build

```bash
npm run build
```

- create .gitignore and add node_modules to it

```md
/node_modules
```
