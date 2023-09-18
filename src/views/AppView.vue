<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavigator from '../components/AppNavigator.vue'
</script>

<template>
  <div class="app-wrapper">
    <header>
      <AppNavigator></AppNavigator>
    </header>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped>
.app-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

main {
  height: calc(100% - 48px);
}
</style>
