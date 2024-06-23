import { defineConfig } from 'unocss'
import baseConfig from '@repo/config-unocss'

export default defineConfig({
  ...baseConfig,
  rules: [
    [
      'card',
      {
        padding: '1rem',
        'border-radius': '0.5rem',
        background: 'white',
        'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    ],
  ],
})
