const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./"
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  extensionsToTreatAsEsm: [".ts"]
  // transformIgnorePatterns: ["/node_modules/(?!(foo|bar)/)"]
};
module.exports = createJestConfig(customJestConfig);
