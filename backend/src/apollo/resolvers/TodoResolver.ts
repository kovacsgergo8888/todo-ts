import Todo from '../../model/Todo'
import { ArgsId } from './ArgsId'

export const Query = {
    todos: () => Todo.find(),
    todo: (parent: any, args: ArgsId) => Todo.findById(args.id)
}

export const Mutation = {
    async addTodo (parent: any, args: any) {
        const todo = await Todo.create(args.todoInput)
        return todo
    },
    async deleteTodo(parent: any, args: ArgsId) {
        await Todo.deleteOne({_id: args.id})
        return args.id
    }
}