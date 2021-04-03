<template>
  <button class="btn" :class="classes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
interface ButtonClass {
  'btn-secondary'?: boolean
}
import {defineComponent, reactive} from 'vue'
export default defineComponent({
  name: 'Btn',
  props: {
    secondary: {
      type: Boolean,
      default: false
    }
  },
  setup ({secondary}) {
    const classes = reactive<ButtonClass>({})
    if (secondary) {
      classes['btn-secondary'] = true
    }
    return {
      classes
    }
  }
})
</script>