import { FC, useState, useRef } from 'react';
import { IoMenu, IoBagOutline, IoHeartOutline, IoSearch } from "react-icons/io5";
import Input from '@components/Input';

const NavBar: FC = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = window.setTimeout(() => {
            setDropdownVisible(false);
        }, 300);
    };

    return (
        <div className='relative'>
            {/* Navbar */}
            <div className='flex flex-row items-center justify-between top-0 left-0 p-2 bg-slate-900 z-50'>  {/* z-50 keeps navbar above the backdrop */}
                <div className='flex flex-row items-center'>
                    <span className='text-white text-xl font-bold'>RetroPop</span>
                    <nav className='md:flex hidden ml-2'>
                        <ul className='flex flex-row items-center font-normal text-sm'>
                            <li
                                className='ml-4 relative group'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* Menswear */}
                                <a href='#' className='text-white hover:text-blue-500'>
                                    Menswear
                                </a>


                            </li>

                            <li className='ml-4'><a href='#' className='text-white hover:text-blue-500'>Womenswear</a></li>
                            <li className='ml-4'><a href='#' className='text-white hover:text-blue-500'>Kids</a></li>
                            <li className='ml-4'><a href='#' className='text-white hover:text-blue-500'>Brands</a></li>
                            <li className='ml-4'><a href='#' className='text-white hover:text-blue-500'>Sale</a></li>
                        </ul>
                    </nav>
                </div>

                {/* Right Side */}
                <div className='flex flex-row items-center gap-2 text-white'>
                    <Input className='placeholder:p-2 placeholder:text-sm' placeholder="Search" icon={IoSearch} />
                    <IoHeartOutline size={20} className='md:flex hidden hover:text-pink-500 rounded' />
                    <IoBagOutline size={20} className='md:flex hidden hover:text-orange-500' />
                    <IoMenu size={24} className='md:hidden flex rounded border hover:bg-purple-300 hover:text-purple-950 hover:transition-colors duration-200' />
                </div>
            </div>

            {isDropdownVisible &&
                <div
                    className=' left-0 top-full bg-white shadow-lg h-[350PX] w-full z-40  grid grid-cols-4 gap-6 p-2'  // Full width and z-index adjustments
                >
                    <div className='space-y-2'>
                        <h3 className='font-semibold text-gray-700'>Shop by category</h3>
                        <ul className='text-gray-500 space-y-1'>
                            <li className='hover:text-black'>T-shirts</li>
                            <li className='hover:text-black'>Shirts</li>
                            <li className='hover:text-black'>Hoodies</li>
                            <li className='hover:text-black'>Jeans</li>
                            <li className='hover:text-black'>Sweaters</li>
                            <li className='hover:text-black'>Coats & Jackets</li>
                        </ul>
                    </div>
                    <div className='space-y-2'>
                        <h3 className='font-semibold text-gray-700'>Featured</h3>
                        <ul className='text-gray-500 space-y-1'>
                            <li className='hover:text-black'>Back to school</li>
                            <li className='hover:text-black'>Festival</li>
                            <li className='hover:text-black'>Halloween</li>
                            <li className='hover:text-black'>Party season</li>
                            <li className='hover:text-black'>Wedding attire</li>
                        </ul>
                    </div>
                    <div className='col-span-2 grid grid-cols-2 gap-4'>
                        {/* Replace with images or styled links */}
                        <div className='h-24 bg-gray-100 text-center rounded'>Gorpcore</div>
                        <div className='h-24 bg-gray-100 text-center rounded'>Streetwear</div>
                        <div className='h-24 bg-gray-100 text-center rounded'>Minimalism</div>
                        <div className='h-24 bg-gray-100 text-center rounded'>Workwear</div>
                    </div>
                </div>

            }


        </div>
    );
};

export default NavBar;
