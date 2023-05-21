# scribbles

## typescript/jest setup from scratch

init typescript and npm's

```
npm init -y
```

add dependecies to package.json

```
npm i -D typescript jest ts-jest @types/jest ts-node ts-node-dev
```

create jest.config.ts

```
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
};

export default config;
```

create folder structure

-   src/app
-   src/test

anlegen von tsconfig.json

```
{
    "compilerOptions": {
        "target": "es2018",
        "module": "commonjs",
        "outDir": "dist",
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "esModuleInterop": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}

```

ergänzung in package.json

```
"dev": "ts-node-dev --respawn --transpile-only src/app/index.ts",
"test" : "jest"
```
