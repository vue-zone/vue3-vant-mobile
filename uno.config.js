import { createRemToPxProcessor } from '@unocss/preset-wind4/utils'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-2 py-1 rounded-1 border-none inline-block bg-green-400 text-white cursor-pointer outline-hidden hover:bg-green-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  ],
  presets: [
    presetWind4({
      preflights: {
        theme: {
          process: createRemToPxProcessor(),
        },
      },
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
  ],
  postprocess: [
    createRemToPxProcessor(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
