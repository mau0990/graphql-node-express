import { TodoRepository } from "../../repositories/todoInterfaces";

export function userResolvers(todoRepo: TodoRepository) {
  return {
    Query: {
      users: () => todoRepo.getUsers(),
      user: (id: string) => todoRepo.getUser(id),
    },
  };
}
