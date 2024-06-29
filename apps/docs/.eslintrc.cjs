/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/config-eslint/index.js'],
  overrides: [
    {
      files: ['src/**/*', 'vite.config.js'],
      rules: {
        // 여기에 특정 파일에 대한 규칙을 추가할 수 있습니다.
      },
    },
  ],
}
