// uno.config.ts
import { defineConfig } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import presetTypography from '@unocss/preset-typography'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  presets: [
    presetAttributify(), // HTML 속성 스타일링
    presetUno(), // 기본 스타일 프리셋
    presetIcons(), // 아이콘 프리셋
    presetTypography(), // 타이포그래피 프리셋
  ],
  transformers: [
    transformerDirectives(), // @apply, @screen 등의 디렉티브 사용 가능
    transformerVariantGroup(), // Variant 그룹화
  ],
})
