<template>
    <button class="btn-indigo">
        <slot></slot>
    </button>
</template>

<style>
  .btn-indigo {
    @apply py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;
  }
</style>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Btn'
})
</script>