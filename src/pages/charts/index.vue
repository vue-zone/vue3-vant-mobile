<script setup lang="ts">
const { t } = useI18n()

const barOption = ref({
  title: {},
  tooltip: {},
  xAxis: {
    data: [t('charts.January'), t('charts.February'), t('charts.March'), t('charts.April'), t('charts.May'), t('charts.June')],
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
})

const lineOption = ref({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
})

const scoreOption = ref({
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%',
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      detail: {
        formatter: '{value}',
      },
      data: [
        {
          value: 50,
          name: 'SCORE',
        },
      ],
    },
  ],
})
</script>

<template>
  <Chart :option="barOption" :style="{ height: '330px' }" />
  <Chart :option="lineOption" :style="{ height: '330px' }" />
  <Chart :option="scoreOption" :style="{ height: '330px' }" />
</template>

<route lang="json5">
{
  name: 'Charts'
}
</route>
