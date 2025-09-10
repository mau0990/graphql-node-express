export enum Status {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}
export interface Todo {
  id: number;
  title: string;
  status: Status;
  createdAt: string;
}

export interface CreateTodoInput {
  title: string;
  status: Status;
}

export interface UpdateTodoInput {
  title?: string;
  status: Status;
}

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;
  getTodo(id: number): Promise<Todo | null>;
  createTodo(input: CreateTodoInput): Promise<Todo>;
  updateTodo(id: number, input: UpdateTodoInput): Promise<Todo>;
  deleteTodo(id: number): Promise<boolean>;
}
