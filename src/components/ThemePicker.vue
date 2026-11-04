<script setup lang="ts">
import { themePresets, themeRoleKeys } from '@/config/themes'
import { useThemeStore } from '@/stores'

const themeStore = useThemeStore()
const current = computed(() => themeStore.current)
</script>

<template>
  <div class="theme-picker">
    <div class="seed-card">
      <span class="dot" :style="{ background: current.seed }" />
      <span class="font-500 flex-1">{{ $t('theme.seed') }}</span>
      <span class="hex">{{ current.seed }}</span>
    </div>

    <div class="swatches" role="radiogroup" :aria-label="$t('home.theme')">
      <button
        v-for="item in themePresets"
        :key="item.key"
        type="button"
        role="radio"
        class="swatch"
        :class="{ active: item.key === themeStore.themeKey }"
        :style="{ '--swatch-color': item.seed }"
        :aria-checked="item.key === themeStore.themeKey"
        :aria-label="$t(`theme.${item.key}`)"
        @click="themeStore.setTheme(item.key)"
      />
    </div>

    <div class="roles-title">
      <div class="i-carbon:settings-adjust" />
      <span>{{ $t('theme.roles') }}</span>
    </div>

    <div v-for="role in themeRoleKeys" :key="role" class="role">
      <span class="dot" :style="{ background: current[role] }" />
      <span class="name">{{ role }}</span>
      <span class="hex">{{ current[role] }}</span>
    </div>
  </div>
</template>

<style scoped>
.theme-picker {
  padding: 16px;
  color: var(--van-text-color);
}

.seed-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 24px;
  background: var(--van-app-primary-container);
}

.swatches {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 4px;
}

.swatch {
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: var(--swatch-color);
  cursor: pointer;
  transition: box-shadow var(--van-duration-fast);
}

.swatch.active {
  box-shadow:
    0 0 0 3px var(--van-background-2),
    0 0 0 6px var(--swatch-color);
}

.roles-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 24px 8px 8px;
  font-weight: 600;
}

.role {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 4px;
}

.dot {
  flex: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgb(0 0 0 / 12%);
}

.name {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hex {
  flex: none;
  padding: 8px 12px;
  border-radius: 10px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 15px;
  background: var(--van-app-surface-container-high);
}
</style>
