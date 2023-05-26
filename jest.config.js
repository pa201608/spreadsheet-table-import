/** @type {import('ts-jest').JestConfigWithTsJest} */
const tsconfig = require('./tsconfig.json')
// const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig)

module.exports = {
    // moduleNameMapper,
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    collectCoverage: false,
    collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
    setupFilesAfterEnv: ['./jest.setup.js'],

    moduleFileExtensions: ['ts', 'js'],
    roots: ['./'],
    testMatch: ['*/**/*.test.(ts|js)'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    reporters: [
        'default',
        [
            'jest-junit',
            {
                suiteName: 'Jest Tests',
                outputDirectory: './reports',
                outputName: 'junit.xml',
                uniqueOutputName: false,
                classNameTemplate: '{classname}-{title}',
                ancestorSeparator: ' › ',
                usePathForSuiteName: true,
            },
            'jest-html-reporters',
            {
                pageTitle: 'Test Report',
            },
        ],
    ],
}
