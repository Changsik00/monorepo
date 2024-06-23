/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/config-eslint/index.js'],
  overrides: [
    {
      files: ['src/**/*', 'vite.config.js'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off', // non-null assertion 사용 비활성화 (허용)
      },
    },
  ],
}
