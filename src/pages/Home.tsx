import {FC} from 'react';
import NavBar from '@/components/NavBar';

const Home: FC = () => {
  return (
    <div className='min-h-screen w-full flex flex-col'>
        <NavBar/>
    </div>
  );
};

export default Home;