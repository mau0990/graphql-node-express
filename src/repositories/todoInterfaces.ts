export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

export interface CreateTodoInput {
  title: string;
  completed?: boolean;
}

export interface UpdateTodoInput {
  title?: string;
  completed?: boolean;
}

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;
  getTodo(id: number): Promise<Todo | null>;
  createTodo(input: CreateTodoInput): Promise<Todo>;
  updateTodo(id: string, input: UpdateTodoInput): Promise<Todo>;
  deleteTodo(id: string): Promise<boolean>;
}
