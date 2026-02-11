import React from 'react';
import { Input } from '../ui/input';
import { IoSearchOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h1>StudySphere</h1>
      </div>
      {/* search field */}
      <div className='flex items-center gap-2'>
        <span><IoSearchOutline /></span>
       <Input className={'p-6 border-none outline-none bg-white text-black'} type="text" placeholder="Search..." />
      </div>

      

    </div>
  );
};

export default Navbar;