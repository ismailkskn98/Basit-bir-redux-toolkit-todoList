import { FC } from 'react';
import { TodoItem } from '../types/types';
import { FaDeleteLeft } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/features/todoSlice';

type TodoListItemProps = {
  todoItem: TodoItem;
};

const TodoListItem: FC<TodoListItemProps> = ({ todoItem }) => {
  const dispath = useDispatch();

  return (
    <article className="flex items-center justify-between border border-gray-800 px-4 py-3 rounded capitalize">
      {todoItem.content}
      <span onClick={() => dispath(removeTodo(todoItem.id))}>
        <FaDeleteLeft className="text-2xl cursor-pointer hover:text-gray-700 hover:transition-colors" />
      </span>
    </article>
  );
};

export default TodoListItem;
