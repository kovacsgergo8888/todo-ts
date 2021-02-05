import {createRouter, createWebHashHistory} from 'vue-router'
import TodoForm from '../components/TodoForm.vue'
import Todos from '../views/Todos.vue'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', redirect: () => ({name: 'todos'})},
        {name: 'todos', path: '/todos', component: Todos},
        {name: 'newTodo', path: '/todo/new', component: TodoForm}
    ]
})