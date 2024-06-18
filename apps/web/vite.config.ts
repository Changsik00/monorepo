import { defineConfig } from 'vite'
import baseConfig from '@repo/vite-config'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  ...baseConfig,
  root: __dirname,
  plugins: [react(), UnoCSS()],
  server: {
    port: 3001,
  },
})
