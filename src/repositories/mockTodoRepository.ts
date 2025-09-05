import { TodoRepository } from "./todoInterfaces";

export class MockTodoRepository implements TodoRepository{
    getTodos() => {
        
    }
      getTodo(id: number): Promise<Todo | null>;
      createTodo(input: CreateTodoInput): Promise<Todo>;
      updateTodo(id: string, input: UpdateTodoInput): Promise<Todo>;
      deleteTodo(id: string): Promise<boolean>;
}