<script setup lang="ts">
import type { ChartBlockInfo, ChartType } from '@/types/block'
import { useForm } from 'vee-validate'
import { watch, toRefs } from 'vue'
import SegmentedControl from '@/ui/SegmentedControl/SegmentedControl.vue'

const props = defineProps<{
  blockInfo: ChartBlockInfo
}>()

const data = [
  {
    label: 'Echarts-Echarts',
    value: 'echarts'
  },
  {
    label: 'Canvas',
    value: 'canvas'
  },
  {
    label: 'SVG',
    value: 'svg'
  }
]

let { blockInfo } = toRefs(props)

const emit = defineEmits<{ (event: 'change', block: ChartBlockInfo): void }>()

const { values, defineInputBinds } = useForm({
  initialValues: {
    chartType: blockInfo.value.props.chartType
  }
})

const chartType = defineInputBinds('chartType')

watch([values], ([newValues]) => {
  emit('change', { ...blockInfo.value, props: { ...blockInfo.value.props, ...newValues } })
})

// const c = useField('content')
</script>

<template>
  <div>
    {{ blockInfo.type }}
  </div>
  <segmented-control
    v-model="chartType"
    :data="data"
    @input="
      (val) => {
        emit('change', {
          ...blockInfo,
          props: { ...blockInfo.props, chartType: val as ChartType }
        })
      }
    "
  />
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
