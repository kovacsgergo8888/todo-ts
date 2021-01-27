<template>
  <div :data-todo-id="todo.id">
      <span>{{todo.todo}}</span>
      <span>{{todo.location}}</span>
      <span>{{todo.dueDate}}</span>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    props: {
        todo: {
            required: true,
            type: Object
        }
    }
})
</script>