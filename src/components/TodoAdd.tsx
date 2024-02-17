import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeContent } from '../redux/features/todoSlice';
import { nanoid } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';
import { motion } from 'framer-motion';

const TodoAdd: FC = () => {
  const { content } = useSelector((state: RootState) => state.todo);
  const dispath = useDispatch();

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full flex items-center justify-between gap-5">
      <input
        type="text"
        className="border border-gray-800 px-3 py-2 h-9 flex-1 outline-none bg-gray-800 text-white text-sm focus:border-gray-700"
        placeholder="Görev Giriniz"
        value={content}
        onChange={(e) => dispath(changeContent(e.target.value))}
        onKeyDown={(e) => e.key === 'Enter' && dispath(addTodo({ id: nanoid(), content }))}
      />
      <button
        onClick={() => dispath(addTodo({ id: nanoid(), content }))}
        className="h-9 px-4 py-2 border border-gray-800 bg-gray-800 hover:bg-gray-700 transition-colors tracking-widest flex items-center justify-center font-semibold"
      >
        Ekle
      </button>
    </motion.section>
  );
};

export default TodoAdd;
