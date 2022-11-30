import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";

const Navbar = () => {
    return (
        <nav className='h-14 bg-indigo-200 max-w-7xl mx-auto rounded-full m-2 px-5'>
            <ul className='h-full flex items-center justify-between text-indigo-900 font-medium gap-3'>
                <h1 className='flex-1'>Moon Tech</h1>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/top-rated'>Top Rated</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li title='wishlist' className='bg-indigo-500 text-white p-2 rounded-full'>
                    <Link to='/wishlist'>
                        <IoIosListBox />
                    </Link>
                </li>
                <li title='cart' className='bg-indigo-500 text-white p-2 rounded-full'>
                    <Link to='/cart'>
                        <BsFillCartFill />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;