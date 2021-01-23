import {GraphQLScalarType, Kind, StringValueNode} from 'graphql'

export const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
        return value.getTime(); // Convert outgoing Date to integer for JSON
    },
    parseValue(value) {
        return new Date(value); // Convert incoming integer to Date
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            try {
                return new Date(ast.value).getTime()
            } catch (e) {
                return null
            }
        }

        return null; // Invalid hard-coded value (not an integer)
    },
})
