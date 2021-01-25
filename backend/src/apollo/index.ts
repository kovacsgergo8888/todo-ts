import {ApolloServer, gql} from 'apollo-server'
import {typeDefs} from './typeDefs'
import {resolvers} from './resolvers'

export const server = new ApolloServer({
    typeDefs, resolvers
})
