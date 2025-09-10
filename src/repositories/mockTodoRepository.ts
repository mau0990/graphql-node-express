import {
  CreateTodoInput,
  Status,
  Todo,
  TodoRepository,
  UpdateTodoInput,
  User,
} from "./todoInterfaces";

//This is a mock repository that simulates the connection to DB
export class MockTodoRepository implements TodoRepository {
  private todos: Todo[];
  private nextId: number;
  private users: User[];

  constructor() {
    this.todos = [
      {
        id: 1,
        title: "Aprender GraphQL",
        status: Status.PENDING,
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        title: "Armar servicio con Express",
        status: Status.PENDING,
        createdAt: new Date().toISOString(),
      },
    ];
    this.users = [
      {
        id: "3333",
        email: "test@test.com",
        name: "Mauricio",
        todos: this.todos,
      },
    ];
    this.nextId = 3;
  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async getTodos() {
    await this.delay(100);
    return this.todos;
  }

  async getTodo(id: number) {
    await this.delay(100);
    return this.todos.find((x) => x.id === id) || null;
  }

  async getUsers() {
    await this.delay(100);
    return this.users;
  }

  async getUser(id: string) {
    await this.delay(100);
    return this.users.find((x) => id === x.id) || null;
  }

  async createTodo(input: CreateTodoInput) {
    await this.delay(100);
    const todo: Todo = {
      status: input.status ?? false,
      createdAt: new Date().toISOString(),
      id: this.nextId++,
      title: input.title,
    };
    this.todos.push(todo);
    return todo;
  }

  async updateTodo(id: number, input: UpdateTodoInput) {
    await this.delay(100);
    const index = this.todos.findIndex((x) => x.id === id);
    if (index < 0) throw new Error(`Todo ${id} not found`);
    const updated = { ...this.todos[index], ...input };
    this.todos[index] = updated;
    return updated;
  }

  async deleteTodo(id: number) {
    await this.delay(100);
    const exist = this.todos.some((x) => x.id === id);
    if (exist) {
      this.todos = this.todos.filter((x) => x.id !== id);
    }
    return exist;
  }
}
