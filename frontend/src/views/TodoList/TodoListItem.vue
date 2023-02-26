<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  todo: {
    required: true,
    type: Object
  }
})
const emit = defineEmits(['delete-todo'])
const deleteTodo = () => {
  emit('delete-todo', props.todo)
}
const dueDate = new Date(props.todo.dueDate).toLocaleString()
</script>
<template>
  <div
    :data-todo-id="todo.id"
    class="flex justify-between border-solid border-2 py-5 border-r-0 border-l-0 items-center"
  >
    <span>{{ todo.todo }}</span>
    <span>{{ todo.location }}</span>
    <span>{{ dueDate }}</span>
    <btn @click="deleteTodo">del</btn>
  </div>
</template>
