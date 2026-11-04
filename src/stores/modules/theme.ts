import { defineStore } from 'pinia'
import type { ConfigProviderThemeVars } from 'vant'
import { defaultThemeKey, themePresets } from '@/config/themes'

type ThemeVars = ConfigProviderThemeVars & Record<string, string>

const useThemeStore = defineStore('theme', () => {
  const themeKey = ref(defaultThemeKey)

  const current = computed(() =>
    themePresets.find(t => t.key === themeKey.value) ?? themePresets[0],
  )

  function setTheme(key: string) {
    themeKey.value = key
  }

  /** 深浅色模式共用：品牌色 */
  const themeVars = computed<ThemeVars>(() => {
    const t = current.value
    return {
      primaryColor: t.primary,
      blue: t.primary,
      buttonPrimaryBorderColor: t.primary,
      buttonPrimaryBackground: t.primary,
      notifyPrimaryBackground: t.primary,
    }
  })

  /**
   * 仅浅色模式：背景、容器等 surface 色
   * 深色模式下保留 Vant 默认的暗色背景
   */
  const themeVarsLight = computed<ThemeVars>(() => {
    const t = current.value
    return {
      background: t.surfaceContainer,
      background2: t.surface,
      background3: t.surface,
      activeColor: t.surfaceContainerHigh,
      navBarBackground: t.surface,
      tabbarBackground: t.surface,
      toastBackground: t.inverseSurface,
      // 自定义变量，供页面使用：--van-app-*
      appPrimaryContainer: t.primaryContainer,
      appSecondaryContainer: t.secondaryContainer,
      appTertiaryContainer: t.tertiaryContainer,
      appSurfaceContainerHigh: t.surfaceContainerHigh,
    }
  })

  const themeVarsDark = computed<ThemeVars>(() => ({
    appPrimaryContainer: 'var(--van-background-3)',
    appSecondaryContainer: 'var(--van-background-3)',
    appTertiaryContainer: 'var(--van-background-3)',
    appSurfaceContainerHigh: 'var(--van-background-3)',
  }))

  return {
    themeKey,
    current,
    setTheme,
    themeVars,
    themeVarsLight,
    themeVarsDark,
  }
}, {
  persist: {
    pick: ['themeKey'],
  },
})

export default useThemeStore
