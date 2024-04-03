module.exports = {
    testEnvironment: 'jest-environment-jsdom-global',
    moduleFileExtensions: ['js', 'json'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.mjs$': 'babel-jest',
    },
    transformIgnorePatterns: [],
    testMatch: ['<rootDir>/src/**/*.test.js'],
};
