import { FC } from 'react';
import NavBar from '@/components/NavBar';

const Home: FC = () => {
  return (
    <div>
      {/*NavBar */}
      <NavBar />

      {/*Main Content */}
      <main className="flex-grow min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to RetroPop</h1>
        <p className="text-center">
          This is a simple store featuring stylish menswear, womenswear, and more.
        </p>
      </main>

      {/*Footer */}
      <div className='bg-slate-800 p-2 left-0 bottom-0'>
        testF
      </div>
    </div>
  );
};

export default Home;