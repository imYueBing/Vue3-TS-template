<template>
  <div class="counter">
    {{ counter }}
    <el-button @click="handleIncrementCounter">点击 + 1</el-button>
  </div>
</template>

<script setup lang="ts">
const counter = ref(0)
const handleIncrementCounter = () => {
  counter.value = counter.value + 1
}
</script>

<style scoped></style>
