import {gql} from 'apollo-server'

export default gql`
    type Todo {
        id: ID!
        todo: String
        location: String
        dueDate: Date
    }
    input TodoInput {
        todo: String!
        location: String
        dueDate: Date
    }

    extend type Query {
        todos: [Todo]
        todo(id: ID!): Todo
    }

    extend type Mutation {
        addTodo(todoInput: TodoInput): Todo
        deleteTodo(id: ID!): ID
    }
`