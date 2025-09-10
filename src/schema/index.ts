import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./typeDef";
import { TodoRepository } from "../repositories/todoInterfaces";
import { createResolvers } from "./resolvers";

// Factory to build schema with repo injected into resolvers
export function buildSchema(repo: TodoRepository) {
  const resolvers = createResolvers(repo);

  return makeExecutableSchema({
    typeDefs,
    resolvers,
  });
}
