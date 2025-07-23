<script setup lang="ts">
defineOptions({
  name: 'KeepAlive',
})

const value = ref(0)
</script>

<template>
  <div class="text-14 space-y-10">
    <p>{{ $t('keepAlive.label') }}</p>
    <van-stepper v-model="value" />
  </div>
</template>

<route lang="json5">
{
  name: 'KeepAlive',
  meta: {
    keepAlive: true
  },
}
</route>
