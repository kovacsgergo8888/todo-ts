<template>
    <div>
        <label>Todo</label>
        <input type="text"/>
    </div>
    <div>
        <label>Location</label>
        <input type="text"/>
    </div>
    <div>
        <label>Due date</label>
        <input type="text"/>
    </div>
    <div>
        <button @click="backToTodos">back to todos</button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useRoute, useRouter} from 'vue-router'
export default defineComponent({
    setup () {
        const route = useRoute()
        const router = useRouter()
        const backToTodos = () => {
            router.push({name: 'todos'})
        }
        return {
            backToTodos
        }
    }
})
</script>