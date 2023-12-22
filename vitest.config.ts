import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, 'packages/template/*'],
    globals: true,
    coverage: {
      provider: 'istanbul',
      reporter: 'json-summary',
    },
  },
});
