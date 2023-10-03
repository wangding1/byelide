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
const { fields, push } = useFieldArray('blocks')

const content = defineInputBinds('content')

watch([values], ([newValues]) => {
  emit('change', { ...blockInfo.value, props: { ...blockInfo.value.props, ...newValues } })
})
</script>

<template>
  <div>
    {{ blockInfo.type }}
  </div>
  <input class="content-input" v-bind="content" />

  <input v-for="field in fields" :key="field.key" class="content-input" v-model="field.value" />

  <button @click="push(new Date().toLocaleTimeString())">添加</button>

  <!-- 非受控 -->
  <!-- <input class="content-input" :defaultValue="value" @input="value = $event.target.value" /> -->
  <!-- 受控 -->
  <!-- <input class="content-input" :value="value" @input="value = $event.target.value" /> -->
  <!-- {{ value }} -->
  <!-- <button @click="value = '哈哈'">更改为 哈哈</button> -->

  <!--  -->
</template>

<style scoped>
.content-input {
  width: 100%;

  /* 在做组件库的时候，input 是有一个 size 属性，sm、md、lg */
  height: 32px;
  margin-top: 8px;
  padding: 0 8px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  outline-style: none;
  color: var(--color-gray-800);
}
</style>
