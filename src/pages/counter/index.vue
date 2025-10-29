<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores'

const counterStore = useCounterStore()
const { counter } = storeToRefs(counterStore)
</script>

<template>
  <div class="text-sm space-y-2">
    <p> {{ $t('counter.description') }}</p>
    <van-stepper v-model="counter" />
  </div>
</template>

<route lang="json5">
{
  name: 'Counter'
}
</route>
