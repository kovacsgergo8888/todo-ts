<template>
  <input
    type="text"
    :value="modelValue"
    @input="emitValue"
    class="input-text-field"
  />
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            required: true,
            type: String
        }
    },
    setup ({modelValue}, {emit}) {
        const emitValue = (event) => {
            emit('update:modelValue', event.target.value)
        }
        return {
            emitValue
        } 
    }
})
</script>
