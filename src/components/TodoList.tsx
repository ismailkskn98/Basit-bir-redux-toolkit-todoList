import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TodoListItem from './TodoListItem';
import { TodoItem } from '../types/types';

const TodoList: FC = () => {
  const { todoList } = useSelector((state: RootState) => state.todo);

  return (
    <section className="flex flex-col w-full gap-5 ">
      {todoList.map((todo: TodoItem) => (
        <TodoListItem key={todo.id} todoItem={todo} />
      ))}
    </section>
  );
};

export default TodoList;
