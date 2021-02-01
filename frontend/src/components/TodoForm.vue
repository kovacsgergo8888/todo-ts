<template>
    <div>
        <div>Todo</div>
        <text-field v-model="todo"/>
    </div>
    <div>
        <div>Location</div>
        <text-field v-model="location"/>
    </div>
    <div>
        <div>Due date</div>
        <text-field v-model="dueDate"/>
    </div>
    <div class="flex justify-between">
        <btn @click="backToTodos" secondary>Back</btn>
        <btn @click="addTodo">Add</btn>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {client} from '../graphql-request/client'
import {gql} from 'graphql-request'

export default defineComponent({
    setup () {
        const route = useRoute()
        const router = useRouter()
        const todo = ref('')
        const location = ref('')
        const dueDate = ref('')
        const backToTodos = () => {
            router.push({name: 'todos'})
        }

        const addTodo = async () => {
            const response = await client.request(gql`
                mutation addTodo($todoInput: TodoInput) {
                    addTodo(todoInput: $todoInput) {
                        todo
                        location
                        dueDate
                    }
                }`,
                {
                    todoInput: {
                        todo: todo.value,
                        location: location.value || null,
                        dueDate: dueDate.value || null
                    }
                }
            )
            backToTodos()
        }
        return {
            todo,
            location,
            dueDate,
            backToTodos,
            addTodo
        }
    }
})
</script>