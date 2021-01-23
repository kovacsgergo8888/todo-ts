import mongoose from '../mongooseConnection'
import {Schema} from 'mongoose'

const TodoSchema: Schema = new Schema({
    todo: {type: String, required: true},
    dueDate: {type: Date, required: false},
    location: {type: String, required: false}
})

const Todo = mongoose.model('Todo', TodoSchema)

export default Todo
