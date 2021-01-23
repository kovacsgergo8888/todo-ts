import {ApolloServer, gql} from 'apollo-server'
import {dateScalar} from './scalar/Date'

import Todo from '../model/Todo'

const typeDefs = gql`
    scalar Date

    type Todo {
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
    }

    type Mutation {
        addTodo(todoInput: TodoInput): Todo
    }
`
const resolvers = {
    Date: dateScalar,
    Query: {
        todos: () => Todo.find()
    },
    Mutation: {
        async addTodo (parent: any, args: any) {
            const todo = await Todo.create(args.todoInput)
            return todo
        }
    }
}

const server = new ApolloServer({
    typeDefs, resolvers
})

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
})
