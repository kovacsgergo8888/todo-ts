import {dateScalar} from './scalar/Date'
import {
    Query as TodoQuery,
    Mutation as TodoMutation
} from './TodoResolver'

export const resolvers = {
    Date: dateScalar,
    Query: {
        ...TodoQuery
    },
    Mutation: {
        ...TodoMutation
    }
}