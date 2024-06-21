// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetIcons,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

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
