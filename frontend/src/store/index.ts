import {createStore} from 'vuex'
import {client} from '../graphql-request/client'
import {gql} from 'graphql-request'

const store = createStore({
    state: {
        todos: []
    },
    mutations: {
        setTodos (state, todos) {
            state.todos = todos
        },
        addTodo (state, todo) {
            state.todos.push(todo)
        },
        removeTodo (state, id) {
            state.todos = state.todos.filter((t: any) => t.id !== id)
        }
    },
    actions: {
        async addTodo ({commit}, {todo, location, dueDate}) {
            const response = await client.request(gql`
                mutation addTodo($todoInput: TodoInput) {
                    todo: addTodo(todoInput: $todoInput) {
                        todo
                        location
                        dueDate
                    }
                }`,
                {
                    todoInput: {
                        todo: todo,
                        location: location || null,
                        dueDate: dueDate || null
                    }
                }
            )
            commit('addTodo', response.todo)
        },
        async loadTodos ({commit}) {
            const {todos} = await client.request(gql`{todos {id todo location dueDate}}`)
            commit('setTodos', todos)
        },
        async deleteTodo({commit}, {todo}) {
            commit('removeTodo', todo.id)
            client.request(gql`
                mutation deleteTodo($todoId: ID!) {
                    deleteTodo(id: $todoId)
                }
            `, {
                todoId: todo.id
            })
        }
    }
})

export default store