export const userTypeDefs = `
    type User{
        id: ID!,
        name: String!,
        email: String!,
        todos: [Todo!]!
    }

    extend type Query{
        users: [User!]!
        user(id: String): User
    }
`;
