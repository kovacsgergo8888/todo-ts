<template>
  <div :data-todo-id="todo.id" class="flex justify-between border-solid border-2 py-5 border-r-0 border-l-0 items-center">
      <span>{{todo.todo}}</span>
      <span>{{todo.location}}</span>
      <span>{{todo.dueDate}}</span>
      <btn @click="deleteTodo">del</btn>
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
    },
    setup ({todo}, {emit}) {
        const deleteTodo = () => {
            emit('delete-todo', todo)
        }
        return {
            deleteTodo
        }
    }
})
</script>