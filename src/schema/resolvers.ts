import { merge } from "lodash";
import { TodoRepository } from "../repositories/todoInterfaces";
import { todoResolvers } from "./todo";
import { userResolvers } from "./user";

export function createResolvers(repo: TodoRepository) {
  const baseResolvers = {
    Query: {
      hello: () => "GraphQL + Express + TS + Repository Pattern 🚀",
    },
  };

  return merge({}, baseResolvers, todoResolvers(repo), userResolvers(repo));
}
