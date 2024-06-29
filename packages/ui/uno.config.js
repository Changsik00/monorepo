import { defineConfig } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'
import baseConfig from '@repo/config-unocss'

export default defineConfig({
  ...baseConfig,
  presets: [
    ...baseConfig.presets,
    presetShadcn({
      color: 'red',
    }),
    presetAnimations(),
  ],
  content: {
    pipeline: {
      include: [/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/, 'src/**/*.{js,ts}'],
    },
  },
})
