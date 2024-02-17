import { FC } from 'react';
import { RingLoader } from 'react-spinners';

const Landing: FC = () => {
  return (
    <main className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
      <RingLoader color="#36d7b7" size={150} />
    </main>
  );
};

export default Landing;
