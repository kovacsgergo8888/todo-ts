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

    type Query {
        todos: [Todo]
    }
`
const resolvers = {
    Date: dateScalar,
    Query: {
        todos: () => Todo.find()
    }
}

const server = new ApolloServer({
    typeDefs, resolvers
})

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
})
