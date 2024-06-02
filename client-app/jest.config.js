export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
  
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
      "^.+\\.svg$": "jest-transformer-svg",
    },
  
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["lcov", "text", "text-summary"],
    coveragePathIgnorePatterns: [ "/node_modules/", "<rootDir>/path/to/ignore/"],
  };