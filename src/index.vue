<template>
  <div class="'vue-component-rollup'">
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('hello')
</script>
