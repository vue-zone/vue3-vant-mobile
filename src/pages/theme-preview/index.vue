<script setup lang="ts">
import type { ActionSheetAction } from 'vant'
import { showConfirmDialog, showNotify, showSuccessToast, showToast } from 'vant'

const { t } = useI18n()

// 表单类
const switchOn = ref(true)
const checked = ref(true)
const checkedGroup = ref(['a'])
const radio = ref('1')
const stepper = ref(1)
const rate = ref(3)
const slider = ref(40)
const fieldValue = ref('')

// 展示类
const activeTab = ref(0)
const activeStep = ref(1)
const activeCollapse = ref(['1'])
const progress = ref(60)
const circleRate = ref(70)

// 反馈类
const showSheet = ref(false)
const sheetActions = computed<ActionSheetAction[]>(() => [
  { name: t('themePreview.option', { n: 1 }) },
  { name: t('themePreview.option', { n: 2 }) },
  { name: t('themePreview.option', { n: 3 }), color: 'var(--van-primary-color)' },
])

function onSheetSelect(action: ActionSheetAction) {
  showSheet.value = false
  showToast(action.name)
}

function onDialog() {
  showConfirmDialog({
    title: t('themePreview.dialogTitle'),
    message: t('themePreview.dialogMessage'),
  }).catch(() => {})
}
</script>

<template>
  <div class="theme-preview">
    <!-- 按钮 -->
    <section class="block">
      <h3 class="block-title">
        Button
      </h3>
      <div class="flex flex-wrap gap-2">
        <van-button type="primary">
          {{ $t('themePreview.primary') }}
        </van-button>
        <van-button type="primary" plain>
          {{ $t('themePreview.plain') }}
        </van-button>
        <van-button type="primary" round icon="like-o">
          {{ $t('themePreview.round') }}
        </van-button>
        <van-button type="primary" loading :loading-text="$t('themePreview.loading')" />
        <van-button>{{ $t('themePreview.default') }}</van-button>
        <van-button type="primary" disabled>
          {{ $t('themePreview.disabled') }}
        </van-button>
      </div>
      <van-button class="mt-3" type="primary" round block>
        {{ $t('themePreview.block') }}
      </van-button>
    </section>

    <!-- 标签 & 徽标 -->
    <section class="block">
      <h3 class="block-title">
        Tag / Badge / Loading
      </h3>
      <div class="flex flex-wrap gap-2 items-center">
        <van-tag type="primary">
          Tag
        </van-tag>
        <van-tag type="primary" plain>
          Plain
        </van-tag>
        <van-tag type="primary" round>
          Round
        </van-tag>
        <van-tag type="primary" mark>
          Mark
        </van-tag>
        <van-tag color="var(--van-app-tertiary-container)" text-color="var(--van-text-color)" size="medium">
          Tertiary
        </van-tag>
      </div>
      <div class="mt-4 flex gap-6 items-center">
        <van-badge :content="5">
          <div class="badge-child" />
        </van-badge>
        <van-badge dot>
          <div class="badge-child" />
        </van-badge>
        <van-badge content="99+" color="var(--van-primary-color)">
          <div class="badge-child" />
        </van-badge>
        <van-loading color="var(--van-primary-color)" />
        <van-loading type="spinner" color="var(--van-primary-color)" />
      </div>
    </section>

    <!-- 通知栏 -->
    <van-notice-bar
      class="mb-4 rounded-4 overflow-hidden"
      left-icon="volume-o"
      :text="$t('themePreview.notice')"
      color="var(--van-primary-color)"
      background="var(--van-app-primary-container)"
    />

    <!-- 表单 -->
    <van-cell-group :title="$t('themePreview.form')" inset>
      <van-field v-model="fieldValue" :label="$t('themePreview.input')" :placeholder="$t('themePreview.placeholder')" clearable />
      <van-cell center :title="$t('themePreview.switch')">
        <template #right-icon>
          <van-switch v-model="switchOn" size="20px" />
        </template>
      </van-cell>
      <van-cell center title="Checkbox">
        <template #right-icon>
          <van-checkbox v-model="checked" />
        </template>
      </van-cell>
      <van-cell center title="CheckboxGroup">
        <template #right-icon>
          <van-checkbox-group v-model="checkedGroup" direction="horizontal">
            <van-checkbox name="a" shape="square">
              A
            </van-checkbox>
            <van-checkbox name="b" shape="square">
              B
            </van-checkbox>
          </van-checkbox-group>
        </template>
      </van-cell>
      <van-cell center title="Radio">
        <template #right-icon>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">
              1
            </van-radio>
            <van-radio name="2">
              2
            </van-radio>
          </van-radio-group>
        </template>
      </van-cell>
      <van-cell center title="Stepper">
        <template #right-icon>
          <van-stepper v-model="stepper" />
        </template>
      </van-cell>
      <van-cell center title="Rate">
        <template #right-icon>
          <van-rate v-model="rate" color="var(--van-primary-color)" />
        </template>
      </van-cell>
      <van-cell center title="Slider">
        <template #value>
          <div class="px-2">
            <van-slider v-model="slider" />
          </div>
        </template>
      </van-cell>
    </van-cell-group>

    <!-- 标签页 -->
    <van-cell-group title="Tabs" inset>
      <van-tabs v-model:active="activeTab" animated swipeable>
        <van-tab v-for="i in 3" :key="i" :title="`${$t('themePreview.tab')} ${i}`">
          <div class="tab-content">
            {{ $t('themePreview.tabContent', { n: i }) }}
          </div>
        </van-tab>
      </van-tabs>
    </van-cell-group>

    <!-- 宫格 -->
    <van-cell-group title="Grid" inset>
      <van-grid :column-num="4" :border="false">
        <van-grid-item icon="photo-o" :text="$t('themePreview.photo')" />
        <van-grid-item icon="chat-o" :text="$t('themePreview.chat')" badge="3" />
        <van-grid-item icon="star-o" :text="$t('themePreview.favorite')" />
        <van-grid-item icon="setting-o" :text="$t('themePreview.setting')" />
      </van-grid>
    </van-cell-group>

    <!-- 进度 -->
    <section class="mt-4 block">
      <h3 class="block-title">
        Progress / Circle / Steps
      </h3>
      <van-progress :percentage="progress" stroke-width="8" />
      <div class="mt-4 flex items-center justify-around">
        <van-circle
          v-model:current-rate="circleRate"
          :rate="70"
          :speed="100"
          :text="`${Math.round(circleRate)}%`"
          color="var(--van-primary-color)"
          layer-color="var(--van-app-primary-container)"
          :stroke-width="80"
        />
        <van-stepper v-model="progress" :min="0" :max="100" :step="10" />
      </div>
      <van-steps class="mt-4" :active="activeStep" @click-step="activeStep = $event">
        <van-step>{{ $t('themePreview.step1') }}</van-step>
        <van-step>{{ $t('themePreview.step2') }}</van-step>
        <van-step>{{ $t('themePreview.step3') }}</van-step>
      </van-steps>
    </section>

    <!-- 折叠面板 -->
    <van-cell-group title="Collapse" inset>
      <van-collapse v-model="activeCollapse" :border="false">
        <van-collapse-item :title="$t('themePreview.collapse', { n: 1 })" name="1">
          {{ $t('themePreview.collapseContent') }}
        </van-collapse-item>
        <van-collapse-item :title="$t('themePreview.collapse', { n: 2 })" name="2">
          {{ $t('themePreview.collapseContent') }}
        </van-collapse-item>
      </van-collapse>
    </van-cell-group>

    <!-- 反馈 -->
    <van-cell-group :title="$t('themePreview.feedback')" inset>
      <van-cell title="Toast" is-link @click="showSuccessToast($t('themePreview.success'))" />
      <van-cell title="Dialog" is-link @click="onDialog" />
      <van-cell title="Notify" is-link @click="showNotify({ type: 'primary', message: $t('themePreview.notify') })" />
      <van-cell title="ActionSheet" is-link @click="showSheet = true" />
    </van-cell-group>

    <van-empty class="mt-2" image="search" :description="$t('themePreview.empty')">
      <van-button type="primary" round size="small">
        {{ $t('themePreview.retry') }}
      </van-button>
    </van-empty>

    <van-action-sheet
      v-model:show="showSheet"
      :actions="sheetActions"
      :cancel-text="$t('themePreview.cancel')"
      close-on-click-action
      @select="onSheetSelect"
    />
  </div>
</template>

<style scoped>
.theme-preview :deep(.van-cell-group__title) {
  padding-left: 4px;
}

.theme-preview :deep(.van-cell-group--inset) {
  margin-bottom: 4px;
}

.block {
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 16px;
  background: var(--van-background-2);
}

.block-title {
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 600;
  color: var(--van-text-color-2);
}

.badge-child {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--van-app-secondary-container);
}

.tab-content {
  padding: 24px 16px;
  font-size: 14px;
  color: var(--van-text-color-2);
  background: var(--van-background-2);
}
</style>

<route lang="json5">
{
  name: 'ThemePreview'
}
</route>
