import { defineStore } from 'pinia'
import { ref } from 'vue'
import { blocks as blocksData } from '@/mocks/blocks'
import type { BlockInfo } from '@/types/block'

export const useAppEditorStore = defineStore('appeditor', () => {
  const currentBlockId = ref<string | null>(null)
  const blocks = ref(blocksData)

  function selectBlock(id: string) {
    currentBlockId.value = id
  }
  function updateBlocks(newBlocks: typeof blocksData) {
    blocks.value = newBlocks
  }
  function updateBlock(id: string, newBlock: BlockInfo) {
    for (let i = 0; i < blocks.value.length; i++) {
      if (blocks.value[i].id == id) {
        Object.assign(blocks.value[i], newBlock)
        break
      }
    }
  }
  return {
    currentBlockId,
    blocks,
    selectBlock,
    updateBlocks,
    updateBlock
  }
})
