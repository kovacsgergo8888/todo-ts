import {ApolloServer, gql} from 'apollo-server'
import {dateScalar} from './scalar/Date'

import Todo from '../model/Todo'

const typeDefs = gql`
    scalar Date

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

    type Query {
        todos: [Todo]
        todo(id: ID!): Todo
    }

    type Mutation {
        addTodo(todoInput: TodoInput): Todo
        deleteTodo(id: ID!): ID
    }
`
const resolvers = {
    Date: dateScalar,
    Query: {
        todos: () => Todo.find(),
        todo: (parent: any, args: any) => Todo.findById(args.id)
    },
    Mutation: {
        async addTodo (parent: any, args: any) {
            const todo = await Todo.create(args.todoInput)
            return todo
        },
        async deleteTodo(parent: any, args: any) {
            await Todo.deleteOne({_id: args.id})
            return args.id
        }
    }
}

const server = new ApolloServer({
    typeDefs, resolvers
})

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
})
