import {createRouter, createWebHashHistory} from 'vue-router'

const Todos = () => import('../views/Todos.vue')
const TodoForm = () => import('../components/TodoForm.vue')

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', redirect: () => ({name: 'todos'})},
        {name: 'todos', path: '/todos', component: Todos},
        {name: 'newTodo', path: '/todo/new', component: TodoForm}
    ]
})