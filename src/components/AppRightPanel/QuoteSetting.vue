<script setup lang="ts">
import type { QuoteBlockInfo } from '@/types/block'
import { useFieldArray, useForm } from 'vee-validate'
import { toRefs, watch } from 'vue'

const props = defineProps<{
  blockInfo: QuoteBlockInfo
}>()

let { blockInfo } = toRefs(props)
const emit = defineEmits<{ (event: 'change', block: QuoteBlockInfo): void }>()
const { values, defineInputBinds } = useForm({
  initialValues: {
    content: blockInfo.value.props.content
  }
})

const content = defineInputBinds('content')

watch([values], ([newValues]) => {
  emit('change', { ...blockInfo.value, props: { ...blockInfo.value.props, ...newValues } })
})
</script>

<template>
  <div class="quote-setting">
    <div>
      {{ blockInfo.type }}
    </div>
    <input class="content-input" v-bind="content" />
  </div>
</template>

<style scoped>
.quote-setting {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  font-size: var(--font-size-large);
  border-radius: 8px;

  /* background-color: ; */
}

.content-input {
  width: 100%;
  height: 32px;
  margin-top: 8px;
  padding: 0 8px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  outline-style: none;
  color: var(--color-gray-800);
}
</style>
