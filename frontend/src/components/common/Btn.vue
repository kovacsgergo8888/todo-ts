<template>
  <button class="btn" :class="classes">
    <slot></slot>
  </button>
</template>

<script>
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
    const classes = reactive({})
    if (secondary) {
      classes['btn-secondary'] = true
    }
    return {
      classes
    }
  }
})
</script>