<script setup lang="ts">
import { useEnvStore } from '../stores/debug'
import { RouterLink } from 'vue-router'

let linkItems = [
  {
    value: 'dataSouce',
    label: '数据源'
  },
  {
    value: 'layout',
    label: '布局'
  },
  {
    value: 'actions',
    label: '动作'
  }
]
</script>

<template>
  <div class="app-navigator">
    <div class="app-info-wrapper">
      <div class="app-logo"></div>
      <h1 class="app-name">Byelide</h1>
    </div>
    <div class="app-navigator-link-wrapper">
      <RouterLink
        class="app-navigator-link-item"
        v-for="item in linkItems"
        :key="item.value"
        :to="item.value"
      >
        <span>{{ item.label }}</span>
      </RouterLink>
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.app-navigator {
  height: 48px;
  display: flex;
  justify-content: space-between;
}

.app-logo {
  width: 32px;
  height: 32px;
  margin: 10px 8px 10px 18px;
  border-radius: 8px;
  background: red;
}

.app-name {
  color: var(--color-gray-900);
  font-weight: var(--font-weight-bolder);
  font-size: var(--font-size-large);
}

.app-info-wrapper {
  display: flex;
  align-items: center;
}

.app-navigator-link-item {
  margin: 0 24px;
  color: var(--color-text);
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bold);
}
</style>
