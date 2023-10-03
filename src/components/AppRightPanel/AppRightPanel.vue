<script setup lang="ts">
import { blocksBaseMeta } from '@/constants/blocksBaseMeta'
import { useAppEditorStore } from '@/stores/appEditor'
import { computed } from 'vue'
import QuoteSetting from './QuoteSetting.vue'
import ChartSetting from './ChartSetting.vue'
import SchemaExporter from './SchemaExporter.vue'
import type { BlockInfo } from '@/types/block'
import 'vue-json-pretty/lib/styles.css'

const appEditorStore = useAppEditorStore()

const blocksMap = computed(() => {
  return appEditorStore.blocks.reduce<Record<string, (typeof appEditorStore.blocks)[0]>>(
    (acc, cur) => {
      acc[cur.id] = cur
      return acc
    },
    {}
  )
})

const currentBlockInfo = computed(() => {
  if (!appEditorStore.currentBlockId) return null
  return blocksMap.value[appEditorStore.currentBlockId]
})
const blockSetting = computed(() => {
  switch (currentBlockInfo.value?.type) {
    case 'quote': {
      return QuoteSetting
    }
    case 'chart': {
      return ChartSetting
    }
    default:
      return ''
  }
})
</script>

<template>
  <div class="app-right-panel-wrapper">
    <template v-if="currentBlockInfo">
      <div class="app-right-panel-header">
        {{ blocksBaseMeta[currentBlockInfo.type].name }}
      </div>
      <div class="app-right-panel-content">
        <component
          :is="blockSetting"
          :blockInfo="currentBlockInfo"
          @change="(block: BlockInfo) => appEditorStore.updateBlock(block.id, block)"
        />
        <SchemaExporter :currentBlockInfo="currentBlockInfo" />
      </div>
    </template>
  </div>
</template>

<style scoped>
.app-right-panel-wrapper {
  position: relative;
  z-index: 4;
  width: var(--panel-width);
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
}

.app-right-panel-header {
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bolder);
  height: 44px;
  line-height: 44px;
  padding: 0 16px 0 20px;
}

.app-right-panel-content {
  padding: 0 16px 0 20px;
}
</style>
