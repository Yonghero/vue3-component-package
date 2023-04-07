<template>
  <div class="'vue-component-rollup'">
    {{ msg }}
    <ElButton>{{ msg }}</ElButton>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
import { ref } from 'vue'

const msg = ref('hello')
</script>
