export type TodoItem = {
  id: string | number;
  content: string;
};

export type TodoInitialState = {
  isLoading: boolean;
  isOpenLoading: boolean;
  todoList: TodoItem[];
  content: string;
};
