import { buildSchema } from "graphql";
import { todoTypeDefs } from "./todo/typeDef";
import { userTypeDefs } from "./user/typeDef";

const rootTypeDefs = `
    enum Status {
        PENDING,
        IN_PROGRESS,
        DONE
    }
    type Query {
        hello: String!
    }
    type Mutation
`;

export const typeDefs = [rootTypeDefs, todoTypeDefs, userTypeDefs].join("\n");
