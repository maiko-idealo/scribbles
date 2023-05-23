import type { Config } from "@jest/types";
const config: Config.InitialOptions = {
    rootDir: "./src/app",
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
};
export default config;
