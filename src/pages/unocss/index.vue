<template>
  <h1 class="text-6xl color-pink font-semibold">
    {{ $t('unocss.title') }}
  </h1>

  <p class="text-gray-700 mt-10 dark:text-white">
    {{ $t('unocss.description') }}
  </p>

  <button class="btn mt-10">
    {{ $t('unocss.button') }}
  </button>
</template>

<route lang="json5">
{
  name: 'UnoCSS'
}
</route>
