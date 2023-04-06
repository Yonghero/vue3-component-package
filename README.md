# vue3-component-package

**适用于打包单文件vue3组件**

node >= 16

## src/index.vue

```js
export default {
  name: 'RollupComponent'
}

<template>
  hello
</template>

```

```shell
yarn build
cd ./playground
yarn && yarn dev
```

```js
App.vue

<script setup lang="ts">

import RollupComponent from '../../dist/index.vue'
</script>

<template>
  <div>
    <RollupComponent />
  </div>
</template>

```
