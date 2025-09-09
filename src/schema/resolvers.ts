import { TodoRepository } from "../repositories/todoInterfaces";

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
