<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { FieldRule } from 'vant'
import { showNotify } from 'vant'
import { useUserStore } from '@/stores'
import vw from '@/utils/inline-px-to-vw'

const { t } = useI18n()
const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)

const postData = reactive({
  email: '',
  code: '',
  password: '',
  confirmPassword: '',
})

const validatorPassword = (val: string) => val === postData.password

const rules = reactive({
  email: [
    { required: true, message: t('forgotPassword.pleaseEnterEmail') },
  ],
  code: [
    { required: true, message: t('forgotPassword.pleaseEnterCode') },
  ],
  password: [
    { required: true, message: t('forgotPassword.pleaseEnterPassword') },
  ],
  confirmPassword: [
    { required: true, message: t('forgotPassword.pleaseEnterConfirmPassword') },
    { required: true, validator: validatorPassword, message: t('forgotPassword.passwordsDoNotMatch') },
  ] as FieldRule[],
})

async function reset() {
  try {
    loading.value = true

    const res = await userStore.reset()

    if (res.code === 0) {
      showNotify({ type: 'success', message: t('forgotPassword.passwordResetSuccess') })
      router.push({ name: 'Login' })
    }
  }
  finally {
    loading.value = false
  }
}

const isGettingCode = ref(false)

const buttonText = computed(() => {
  return isGettingCode.value ? t('forgotPassword.gettingCode') : t('forgotPassword.getCode')
})

async function getCode() {
  if (!postData.email) {
    showNotify({ type: 'warning', message: t('forgotPassword.pleaseEnterEmail') })
    return
  }

  isGettingCode.value = true
  const res = await userStore.getCode()
  if (res.code === 0)
    showNotify({ type: 'success', message: `${t('forgotPassword.sendCodeSuccess')}: ${res.result}` })

  isGettingCode.value = false
}
</script>

<template>
  <div class="m-x-a text-center w-7xl">
    <van-form :model="postData" :rules="rules" validate-trigger="onSubmit" @submit="reset">
      <div class="rounded-3xl overflow-hidden">
        <van-field
          v-model.trim="postData.email"
          :rules="rules.email"
          name="email"
          :placeholder="$t('forgotPassword.email')"
        />
      </div>

      <div class="mt-16 rounded-3xl overflow-hidden">
        <van-field
          v-model.trim="postData.code"
          :rules="rules.code"
          name="code"
          :placeholder="$t('forgotPassword.code')"
        >
          <template #button>
            <van-button size="small" type="primary" plain @click="getCode">
              {{ buttonText }}
            </van-button>
          </template>
        </van-field>
      </div>

      <div class="mt-16 rounded-3xl overflow-hidden">
        <van-field
          v-model.trim="postData.password"
          type="password"
          :rules="rules.password"
          name="password"
          :placeholder="$t('forgotPassword.password')"
        />
      </div>

      <div class="mt-16 rounded-3xl overflow-hidden">
        <van-field
          v-model.trim="postData.confirmPassword"
          type="password"
          :rules="rules.confirmPassword"
          name="confirmPassword"
          :placeholder="$t('forgotPassword.confirmPassword')"
        />
      </div>

      <div class="mt-16">
        <van-button
          :loading="loading"
          type="primary"
          native-type="submit"
          round block
        >
          {{ $t('forgotPassword.confirm') }}
        </van-button>
      </div>
    </van-form>

    <GhostButton to="login" block :style="{ 'margin-top': vw(8) }">
      {{ $t('forgotPassword.backToLogin') }}
    </GhostButton>
  </div>
</template>

<route lang="json5">
{
  name: 'ForgotPassword'
}
</route>
