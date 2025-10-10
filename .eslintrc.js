module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
  plugins: ['prettier'],
  rules: {
    // Prettier integration
    'prettier/prettier': 'error',

    // Reglas específicas que solicitas
    curly: ['error', 'all'], // Requiere llaves en todos los returns, ifs, etc.
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    // Reglas adicionales útiles
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'build/',
    'next-env.d.ts',
  ],
};
