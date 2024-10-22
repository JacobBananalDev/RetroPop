import { FC } from 'react'
import { IoMenu, IoBagOutline, IoHeartOutline } from "react-icons/io5";
const NavBar: FC = () => {
    return (
        <div className='flex flex-row items-center justify-between top-0 left-0 p-2 bg-slate-900'>
            <div className='flex flex-row items-center'>
                <span className='text-white text-xl font-bold'>RetroPop</span>
                <nav className='md:flex hidden ml-2'>
                    <ul className='flex flex-row items-center font-normal text-sm'>
                        <li className='ml-4'><a href='#' className='text-white hover:text-blue-500'>Menswear</a></li>
                        <li className='ml-4'><a href='#' className='text-white hover:text-blue-500'>Womenswear</a></li>
                        <li className='ml-4'><a href='#' className='text-white hover:text-blue-500'>Kids</a></li>
                        <li className='ml-4'><a href='#' className='text-white hover:text-blue-500'>Brands</a></li>
                        <li className='ml-4'><a href='#' className='text-white hover:text-blue-500'>Sale</a></li>
                    </ul>
                </nav>
            </div>
            <div className='flex flex-row gap-2 text-white'>
                <IoHeartOutline size={20} className='md:flex hidden hover:text-pink-500 rounded' />
                <IoBagOutline size={20} className='md:flex hidden hover:text-orange-500' />
                <IoMenu size={24} className='md:hidden flex rounded border hover:bg-purple-300 hover:text-purple-950 hover:transition-colors duration-200' />
            </div>
        </div>
    );
};

export default NavBar;
