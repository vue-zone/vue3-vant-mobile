<template>
  <h1 class="text-base color-pink font-semibold">
    {{ $t('unocss.title') }}
  </h1>

  <p class="text-gray-700 mt-2 dark:text-white">
    {{ $t('unocss.description') }}
  </p>

  <button class="btn mt-2">
    {{ $t('unocss.button') }}
  </button>
</template>

<route lang="json5">
{
  name: 'UnoCSS'
}
</route>
