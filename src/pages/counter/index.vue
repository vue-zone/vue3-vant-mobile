<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores'

const counterStore = useCounterStore()
const { counter } = storeToRefs(counterStore)
</script>

<template>
  <div class="text-14 space-y-10">
    <p> {{ $t('counter.description') }}</p>
    <van-stepper v-model="counter" />
  </div>
</template>

<route lang="json5">
{
  name: 'Counter'
}
</route>
