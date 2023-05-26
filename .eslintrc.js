// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        //   project: ['./tsconfig.json'],
        module: 'module',
        ecmaVersion: 2020,
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    env: {
        node: true,
        jest: true,
        es2020: true,
    },
    ignorePatterns: ['node_modules', 'dist', 'reports', 'coverage'],
    rules: {
        'linebreak-style': ['error', 'unix'],
        'prettier/prettier': ['error'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': 'warn',
    },
}
