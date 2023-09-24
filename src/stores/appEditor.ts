import { defineStore } from 'pinia'
import { ref } from 'vue'
import { blocks as blocksData } from '@/mocks/blocks'

export const useAppEditorStore = defineStore('appeditor', () => {
  const currentBlockId = ref<string | null>(null)
  const blocks = ref(blocksData)

  function selectBlock(id: string) {
    currentBlockId.value = id
  }
  function updateBlocks(newBlocks: typeof blocksData) {
    blocks.value = newBlocks
  }
  return {
    currentBlockId,
    blocks,
    selectBlock,
    updateBlocks
  }
})
