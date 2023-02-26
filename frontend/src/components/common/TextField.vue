<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    required: true,
    type: String
  }
})

const emitValue = (event: any) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="emitValue"
    class="input-text-field"
  />
</template>
