/**
 * Material 3 风格的主题色预设
 * 每套主题由一个基准色（seed）生成，以下为对应的配色角色（color roles）
 */
export interface ThemePreset {
  key: string
  /** 基准色，用于色板展示 */
  seed: string
  primary: string
  primaryContainer: string
  secondaryContainer: string
  tertiaryContainer: string
  /** 页面背景（surface） */
  surface: string
  surfaceContainer: string
  surfaceContainerHigh: string
  inverseSurface: string
}

export const themePresets: readonly ThemePreset[] = [
  {
    key: 'purple',
    seed: '#6750A4',
    primary: '#6750A4',
    primaryContainer: '#E9DDFF',
    secondaryContainer: '#E9DDFD',
    tertiaryContainer: '#FDDAE1',
    surface: '#FDF8FD',
    surfaceContainer: '#EFEDF2',
    surfaceContainerHigh: '#E9E7ED',
    inverseSurface: '#313034',
  },
  {
    key: 'blue',
    seed: '#0B3FCC',
    primary: '#3757BA',
    primaryContainer: '#E0E0FC',
    secondaryContainer: '#E0E0FE',
    tertiaryContainer: '#FFD8E7',
    surface: '#FBF8FF',
    surfaceContainer: '#EDEDF3',
    surfaceContainerHigh: '#E8E8ED',
    inverseSurface: '#303034',
  },
  {
    key: 'green',
    seed: '#255B34',
    primary: '#256B42',
    primaryContainer: '#ABF2C1',
    secondaryContainer: '#D1E8D7',
    tertiaryContainer: '#B6ECF4',
    surface: '#F6FBF5',
    surfaceContainer: '#EAEFEB',
    surfaceContainerHigh: '#E4EAE5',
    inverseSurface: '#2D312E',
  },
  {
    key: 'rose',
    seed: '#984061',
    primary: '#984061',
    primaryContainer: '#FED9E4',
    secondaryContainer: '#FCDAE3',
    tertiaryContainer: '#FFDBC6',
    surface: '#FFF8F8',
    surfaceContainer: '#F4ECEE',
    surfaceContainerHigh: '#EEE6E8',
    inverseSurface: '#352F30',
  },
  {
    key: 'orange',
    seed: '#8B5000',
    primary: '#8B5000',
    primaryContainer: '#FDDDC1',
    secondaryContainer: '#FBDDC4',
    tertiaryContainer: '#D2EABA',
    surface: '#FFF8F4',
    surfaceContainer: '#F2EDE8',
    surfaceContainerHigh: '#EDE7E3',
    inverseSurface: '#34302C',
  },
  {
    key: 'teal',
    seed: '#00696E',
    primary: '#0C696E',
    primaryContainer: '#77F5FD',
    secondaryContainer: '#C6E9EB',
    tertiaryContainer: '#D1E4FC',
    surface: '#F4FBFB',
    surfaceContainer: '#E7EFF0',
    surfaceContainerHigh: '#E1EAEA',
    inverseSurface: '#2B3232',
  },
  {
    key: 'jade',
    seed: '#1B766C',
    primary: '#006A61',
    primaryContainer: '#9EF2E5',
    secondaryContainer: '#CCE8E2',
    tertiaryContainer: '#CCE5FF',
    surface: '#F4FBF8',
    surfaceContainer: '#E9EFED',
    surfaceContainerHigh: '#E3EAE7',
    inverseSurface: '#2B3230',
  },
  {
    key: 'red',
    seed: '#B3261E',
    primary: '#AC3327',
    primaryContainer: '#FCDBD4',
    secondaryContainer: '#FEDBD3',
    tertiaryContainer: '#F1E2A9',
    surface: '#FFF8F6',
    surfaceContainer: '#F4ECEA',
    surfaceContainerHigh: '#EEE6E5',
    inverseSurface: '#352F2E',
  },
  {
    key: 'slate',
    seed: '#4A4459',
    primary: '#635590',
    primaryContainer: '#E7DEFD',
    secondaryContainer: '#E6DFF6',
    tertiaryContainer: '#FED9E2',
    surface: '#FDF8FD',
    surfaceContainer: '#EFEDF3',
    surfaceContainerHigh: '#E9E7ED',
    inverseSurface: '#313034',
  },
]

export const defaultThemeKey = 'purple'

/** 展示用的配色角色列表 */
export const themeRoleKeys = [
  'primary',
  'primaryContainer',
  'secondaryContainer',
  'tertiaryContainer',
  'surfaceContainer',
  'surfaceContainerHigh',
  'inverseSurface',
] as const satisfies readonly (keyof ThemePreset)[]
