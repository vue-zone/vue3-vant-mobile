# 页面滚动位置保存与恢复指南

如果你希望在离开页面时保存当前滚动位置，并在返回页面时恢复，可以参考下面的实现方式。

## 基本思路

1. **缓存组件**
   将 `keepAlive` 设置为 `true`，以缓存组件实例。

2. **保存滚动位置**
   在离开页面前，使用 `onBeforeRouteLeave` 保存当前滚动位置。

3. **恢复滚动位置**
   在页面重新激活时，使用 `onActivated` 恢复上次保存的滚动位置。

## 示例代码

```js
// 定义一个 ref，用于保存滚动位置
const scrollTop = ref(0)

// 当 keepAlive 缓存的组件重新激活时，滚动到上次保存的位置
onActivated(() => {
  window.scrollTo(0, scrollTop.value)
})

// 在路由离开前，保存当前滚动位置
onBeforeRouteLeave(() => {
  scrollTop.value
    = window.scrollY
      || document.documentElement.scrollTop
      || document.body.scrollTop
})
```

## 处理指定滚动容器

如果你需要保存和恢复某个指定元素的滚动位置，而不是整个窗口，可以按下面的步骤实现。

### 1. 在模板中添加 `ref`

在模板中，为滚动容器元素添加 `ref` 属性，例如：

```html
<div ref="scrollContainer" class="...">...</div>
```

### 2. 在 `setup` 中声明引用

使用 `ref` 获取该元素实例：

```js
const scrollContainer = ref(null)
```

### 3. 在 `onBeforeRouteLeave` 中保存位置

保存滚动容器当前的滚动位置：

```js
onBeforeRouteLeave(() => {
  if (scrollContainer.value) {
    scrollTop.value = scrollContainer.value.scrollTop
  }
})
```

### 4. 在 `onActivated` 中恢复位置

恢复滚动容器之前保存的滚动位置：

```js
onActivated(() => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = scrollTop.value
  }
})
```
