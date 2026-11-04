<script setup lang="ts">
import type { PickerColumn } from 'vant'
import { languageColumns, locale } from '@/utils/i18n'
import { useThemeStore } from '@/stores'

const { t } = useI18n()
const themeStore = useThemeStore()
const showThemePicker = ref(false)
const router = useRouter()

function onPreviewTheme() {
  showThemePicker.value = false
  router.push('/theme-preview')
}

const checked = computed({
  get: () => isDark.value,
  set: () => toggleDark(),
})

const menuItems = computed(() => ([
  { title: t('navbar.ThemePreview'), route: 'theme-preview' },
  { title: t('navbar.Mock'), route: 'mock' },
  { title: t('navbar.Charts'), route: 'charts' },
  { title: t('navbar.UnoCSS'), route: 'unocss' },
  { title: t('navbar.Counter'), route: 'counter' },
  { title: t('navbar.KeepAlive'), route: 'keepalive' },
  { title: t('navbar.ScrollCache'), route: 'scroll-cache' },
  { title: t('navbar.404'), route: 'unknown' },
]))

const showLanguagePicker = ref(false)
const languageValues = ref<Array<string>>([locale.value])
const language = computed(() => languageColumns.find(l => l.value === locale.value).text)

function onLanguageConfirm(event: { selectedOptions: PickerColumn }) {
  locale.value = event.selectedOptions[0].value as string
  showLanguagePicker.value = false
}
</script>

<template>
  <van-cell-group :title="$t('home.settings')" :border="false" :inset="true">
    <van-cell center :title="$t('home.darkMode')">
      <template #right-icon>
        <van-switch
          v-model="checked"
          size="20px"
          aria-label="on/off Dark Mode"
        />
      </template>
    </van-cell>

    <van-cell
      is-link
      center
      :title="$t('home.theme')"
      @click="showThemePicker = true"
    >
      <template #value>
        <div class="flex gap-2 items-center justify-end">
          <span>{{ $t(`theme.${themeStore.themeKey}`) }}</span>
          <span class="theme-dot" :style="{ background: themeStore.current.seed }" />
        </div>
      </template>
    </van-cell>

    <van-cell
      is-link
      :title="$t('home.language')"
      :value="language"
      @click="showLanguagePicker = true"
    />
  </van-cell-group>

  <van-cell-group :title="$t('home.examples')" :border="false" :inset="true">
    <template v-for="item in menuItems" :key="item.route">
      <van-cell :title="item.title" :to="item.route" is-link />
    </template>
  </van-cell-group>

  <van-popup
    v-model:show="showThemePicker"
    position="bottom"
    round
    :style="{ maxHeight: '85%' }"
  >
    <theme-picker />
    <div class="px-4 pb-6">
      <van-button type="primary" round block @click="onPreviewTheme">
        {{ $t('theme.preview') }}
      </van-button>
    </div>
  </van-popup>

  <van-popup v-model:show="showLanguagePicker" position="bottom">
    <van-picker
      v-model="languageValues"
      :columns="languageColumns"
      @confirm="onLanguageConfirm"
      @cancel="showLanguagePicker = false"
    />
  </van-popup>
</template>

<style scoped>
.theme-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
</style>

<route lang="json5">
{
  name: 'Home'
}
</route>
