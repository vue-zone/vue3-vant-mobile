<script setup lang="ts">
import { showConfirmDialog } from 'vant'
import router from '@/router'
import { useUserStore } from '@/stores'
import { version } from '~root/package.json'

const { t } = useI18n()
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)

function Logout() {
  showConfirmDialog({
    title: t('settings.confirmTitle'),
  })
    .then(() => {
      userStore.logout()
      router.push({ name: 'Home' })
    })
    .catch(() => {})
}
</script>

<template>
  <div class="text-center">
    <VanCellGroup :inset="true">
      <van-cell v-if="userInfo.uid" :title="$t('settings.logout')" clickable class="van-text-color" @click="Logout" />
    </VanCellGroup>

    <div class="text-gray mt-10">
      {{ $t("settings.currentVersion") }}: v{{ version }}
    </div>
  </div>
</template>

<style scoped>
.van-text-color {
  --van-cell-text-color: var(--van-red);
}
</style>

<route lang="json5">
{
  name: 'Settings'
}
</route>
