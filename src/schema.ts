import { buildSchema } from "graphql";
import { TodoRepository } from "./repositories/todoInterfaces";
export const schema = buildSchema(`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
    createdAt: String!
  }

  input CreateTodoInput {
    title: String!
    completed: Boolean
  }

  input UpdateTodoInput {
    title: String
    completed: Boolean
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
`);

export function createRoot(todoRepo: TodoRepository) {
  return {
    hello: () => "GraphQL + Express + TS + Repository Pattern 🚀",
    todos: () => todoRepo.getTodos(),
    todo: ({ id }: { id: string }) => todoRepo.getTodo(Number(id)),
    createTodo: ({ input }: { input: any }) => todoRepo.createTodo(input),
    updateTodo: ({ id, input }: { id: string; input: any }) =>
      todoRepo.updateTodo(Number(id), input),
    deleteTodo: ({ id }: { id: string }) => todoRepo.deleteTodo(Number(id)),
  };
}
