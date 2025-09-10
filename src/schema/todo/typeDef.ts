export const todoTypeDefs = `
    type Todo {
        id: ID!
        title: String!
        status: Status!
        createdAt: String!
        user: User!
    }

    input CreateTodoInput {
        title: String!
        completed: Status
    }

    input UpdateTodoInput {
        title: String
        completed: Status
    }

    extend type Query {
        todos: [Todo!]!
        todo(id: ID!): Todo
    }

    extend type Mutation {
        createTodo(input: CreateTodoInput!): Todo!
        updateTodo(id: ID!, input: UpdateTodoInput!): Todo!
        deleteTodo(id: ID!): Boolean!
    }
`;
