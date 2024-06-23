/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/config-eslint/index.js'],
  overrides: [
    {
      files: ['src/**/*', 'vite.config.js'],
      rules: {
        // 여기에 특정 파일에 대한 규칙을 추가할 수 있습니다.
        'react/no-unknown-property': [
          'error',
          {
            ignore: ['bg', 'text', 'font', 'p', 'm', 'border', 'type', 'cursor'], // Unocss Attributify 모드 속성 무시
          },
        ],
      },
    },
  ],
}
