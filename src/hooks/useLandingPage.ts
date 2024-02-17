import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import { changeIsOpenLoading } from '../redux/features/todoSlice';

export const useLandingPage = (delay: number) => {
  const { isOpenLoading } = useSelector((state: RootState) => state.todo);
  const dispath = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispath(changeIsOpenLoading(false));
    }, delay);
  }, [dispath]);

  return isOpenLoading;
};
