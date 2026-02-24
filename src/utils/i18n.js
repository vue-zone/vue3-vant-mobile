import { createI18n } from 'vue-i18n'
import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'
import { Locale } from 'vant'

const FALLBACK_LOCALE = 'zh-CN'

const vantLocales = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

export const languageColumns = [
  { text: '简体中文', value: 'zh-CN' },
  { text: 'English', value: 'en-US' },
]

export const i18n = setupI18n()

export const locale = computed({
  get() {
    return i18n.global.locale.value
  },
  set(language) {
    setLang(language, i18n)
  },
})

function setupI18n() {
  const locale = getI18nLocale()
  const i18n = createI18n({
    locale,
    legacy: false,
  })
  setLang(locale, i18n)
  return i18n
}

async function setLang(lang, i18nInstance) {
  await loadLocaleMsg(lang, i18nInstance)

  document.querySelector('html').setAttribute('lang', lang)
  localStorage.setItem('language', lang)
  i18nInstance.global.locale.value = lang

  // 设置 vant 组件语言包
  Locale.use(lang, vantLocales[lang])
}

// 加载本地语言包
async function loadLocaleMsg(localeName, i18nInstance) {
  const messages = await import(`../locales/${localeName}.json`)
  i18nInstance.global.setLocaleMessage(localeName, messages.default)
}

// 获取当前语言对应的语言包名称
function getI18nLocale() {
  const storedLocale = localStorage.getItem('language') || navigator.language

  const langs = languageColumns.map(v => v.value)

  // 存在当前语言的语言包 或 存在当前语言的任意地区的语言包
  const foundLocale = langs.find(v => v === storedLocale || v.indexOf(storedLocale) === 0)

  // 若未找到，则使用 默认语言包
  const localeName = foundLocale || FALLBACK_LOCALE

  return localeName
}
