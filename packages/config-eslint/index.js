module.exports = {
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: true, // 특정 tsconfig 파일 경로 지정 ex) ./tsconfig.backup.json
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        semi: false,
        printWidth: 120,
      },
    ], // Prettier 규칙을 ESLint에 통합하고 설정을 포함
    semi: ['error', 'never'], // 세미콜론을 사용하지 않음
    quotes: ['error', 'single'], // 홑따옴표 사용 강제
    'no-console': 'warn', // console.log 사용시 경고
    'no-debugger': 'warn', // debugger 사용시 경고
    '@typescript-eslint/explicit-function-return-type': 'off', // 함수 반환 타입 명시를 비활성화
    '@typescript-eslint/no-non-null-assertion': 'warn', // non-null assertion 사용 경고
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 사용되지 않은 변수에 대한 경고
    'react/react-in-jsx-scope': 'off', // React 17+에서는 필요하지 않음
    'react/prop-types': 'off', // TypeScript 사용 시 PropTypes 불필요
    'react/jsx-uses-react': 'off', // React 17+에서는 필요하지 않음
    'react/jsx-uses-vars': 'error', // 사용되지 않는 JSX 변수 경고 방지
  },
}
