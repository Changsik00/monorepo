import { defineConfig } from 'vite'
import baseConfig from '@repo/vite-config'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  ...baseConfig,
  plugins: [react(), UnoCSS()],
  server: {
    port: 3000,
  },
})
