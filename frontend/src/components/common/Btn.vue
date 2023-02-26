<template>
  <button class="btn" :class="classes">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { reactive, defineProps } from 'vue'
interface ButtonClass {
  'btn-secondary'?: boolean
}

const props = defineProps({
  secondary: {
    type: Boolean,
    default: false
  }
})

const classes = reactive<ButtonClass>({})
if (props.secondary) {
  classes['btn-secondary'] = true
}
</script>
