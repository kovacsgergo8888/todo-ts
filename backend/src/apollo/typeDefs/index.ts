import {gql} from 'apollo-server'
import Todo from './Todo'

const baseTypeDefs = gql`
    scalar Date

    type Query

    type Mutation
`

export const typeDefs = [
    baseTypeDefs, 
    Todo
]