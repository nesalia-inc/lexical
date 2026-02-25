import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([
    '**/node_modules/**',
    '**/dist/**',
    '**/.next/**',
    '**/build/**',
    '**/coverage/**',
    'apps/**',
    'packages/**',
  ]),
  {
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
    },
  },
]);

export default eslintConfig;
