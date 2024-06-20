import { defineConfig } from 'vite'
import baseConfig from '@repo/vite-config'

export default defineConfig({
  ...baseConfig,
  server: {
    port: 3000,
  },
})
