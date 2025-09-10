import express from "express";
import cors from "cors";
import { createHandler } from "graphql-http/lib/use/express";
import { buildSchema } from "./schema";
import { MockTodoRepository } from "./repositories/mockTodoRepository";
import { ruruHTML } from "ruru/server";

const app = express();
app.use(cors());

const todoRepo = new MockTodoRepository();

// Schema + resolvers combined
const schema = buildSchema(todoRepo);

app.all(
  "/graphql",
  createHandler({
    schema,
    context: () => ({ todoRepo }),
  })
);

app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
