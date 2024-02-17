import { FC, useState } from 'react';
import { TodoItem } from '../types/types';
import { FaDeleteLeft } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/features/todoSlice';
import { AnimatePresence, motion } from 'framer-motion';

type TodoListItemProps = {
  todoItem: TodoItem;
};

const TodoListItem: FC<TodoListItemProps> = ({ todoItem }) => {
  const [isVisible, SetIsVisible] = useState(true);
  const dispath = useDispatch();

  const handleRemoveTodo = (id: string | number): void => {
    SetIsVisible((prev) => !prev);
    setTimeout(() => {
      dispath(removeTodo(id));
    }, 250);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.article
            initial={{ translateX: -100 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 200, opacity: 0 }}
            className="flex items-center justify-between border border-gray-800 px-4 py-3 rounded capitalize"
          >
            {todoItem.content}
            <span onClick={() => handleRemoveTodo(todoItem.id)}>
              <FaDeleteLeft className="text-2xl cursor-pointer hover:text-gray-700 hover:transition-colors" />
            </span>
          </motion.article>
        )}
      </AnimatePresence>
    </>
  );
};

export default TodoListItem;
