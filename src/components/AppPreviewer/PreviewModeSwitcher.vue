<script setup lang="ts">
import { Iphone, LaptopComputer } from '@icon-park/vue-next'
import type { Icon } from '@icon-park/vue-next/lib/runtime'
import type { PreviewType } from './type'
let props = defineProps<{
  previewMode?: PreviewType
}>()
const icons: { type: PreviewType; icon: Icon }[] = [
  { type: 'laptop', icon: LaptopComputer },
  { type: 'mobile', icon: Iphone }
]

let emit = defineEmits<{
  'preview-mode-change': [mode: PreviewType]
}>()
function greet(mode: PreviewType) {
  emit('preview-mode-change', mode)
}
</script>

<template>
  <div class="icon-button-wrapper">
    <div class="icon-button" v-for="icon in icons" :key="icon.type">
      <component
        :is="icon.icon"
        :size="20"
        :fill="props.previewMode === icon.type ? 'var(--color-text)' : 'var(--color-gray-500)'"
        @click="greet(icon.type)"
      />
    </div>
  </div>
</template>

<style scoped>
.icon-button-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  color: var(--color-gray-700);
}

.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
}

.icon-button:hover {
  background-color: var(--color-gray-200);
}

span {
  cursor: pointer;
}
</style>
