<script lang="ts" setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'

const router = useRouter()
const todo = ref('')
const location = ref('')
const dueDate = ref('')
const backToTodos = () => {
    router.push({name: 'todos'})
}

const store = useStore()

const addTodo = async () => {
    await store.dispatch('addTodo', {
        todo: todo.value,
        location: location.value,
        dueDate: dueDate.value
    })
    backToTodos()
}

</script>

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
