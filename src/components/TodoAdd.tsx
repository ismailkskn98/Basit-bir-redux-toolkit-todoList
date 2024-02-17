import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeContent } from '../redux/features/todoSlice';
import { nanoid } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';

const TodoAdd: FC = () => {
  const { content } = useSelector((state: RootState) => state.todo);
  const dispath = useDispatch();

  return (
    <header className="flex gap-5">
      <input
        type="text"
        className="border border-gray-800 px-3 py-2 min-w-64 outline-none bg-gray-800 text-white text-sm focus:border-gray-700"
        placeholder="Görev Giriniz"
        value={content}
        onChange={(e) => dispath(changeContent(e.target.value))}
        onKeyDown={(e) => e.key === 'Enter' && dispath(addTodo({ id: nanoid(), content }))}
      />
      <button
        onClick={() => dispath(addTodo({ id: nanoid(), content }))}
        className="border border-gray-800 px-4 py-1 bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        Ekle
      </button>
    </header>
  );
};

export default TodoAdd;
