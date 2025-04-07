module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    "\\.scss$": "identity-obj-proxy",
    // Handle module aliases
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^models/(.*)$": "<rootDir>/src/models/$1",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
    "^store/(.*)$": "<rootDir>/src/store/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
