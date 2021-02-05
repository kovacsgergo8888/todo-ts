<template>
    <h1 class="pb-6 text-center text-6xl tracking-wider antialiased">Todos</h1>
    <div class="mb-6 text-right">
        <btn @click="newTodo">+</btn>
    </div>
    <div 
        class="text-center text-3xl"
        v-if="!todos.length"
    >
        No todos!
    </div>
    <template v-else>
        <div>{{todos.length}} todo(s)</div>
        <TodoListItem
            v-for="todo in todos" :key="todo.id"
            :todo="todo"
            @delete-todo="deleteTodo"
        />
    </template>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {useRouter} from 'vue-router'
import TodoListItem from './TodoList/TodoListItem.vue'
import {useStore} from 'vuex'

export default defineComponent({
    components: {
        TodoListItem
    },
    setup () {
        const router = useRouter()
        const store = useStore()
        
        store.dispatch('loadTodos')
        return {
            todos: computed(() => store.state.todos),
            newTodo: () => router.push({name: 'newTodo'}),
            deleteTodo: (todo: any) => store.dispatch('deleteTodo', {todo})
        }
    }
})
</script>