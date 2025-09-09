import { buildSchema } from "graphql";

const typeDefs = `
    enum Status {
        PENDING,
        IN_PROGRESS,
        DONE
    }

    type User{
        id: ID!,
        name: String!,
        email: String!,
        todos: [Todo!]!
    }

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

    type Query {
        hello: String!
        todos: [Todo!]!
        todo(id: ID!): Todo
    }

    type Mutation {
        createTodo(input: CreateTodoInput!): Todo!
        updateTodo(id: ID!, input: UpdateTodoInput!): Todo!
        deleteTodo(id: ID!): Boolean!
    }
`;
export const schema = buildSchema(typeDefs);
