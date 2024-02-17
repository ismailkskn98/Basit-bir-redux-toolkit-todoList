import { FC } from 'react';
import { motion } from 'framer-motion';

const Header: FC = () => {
  return (
    <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-white text-7xl mb-10 font-semibold tracking-widest">My Todos</h1>
    </motion.header>
  );
};

export default Header;
