import React from 'react';
import { Input } from '../ui/input';
import { IoSearchOutline } from 'react-icons/io5';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

import { FaRegBell } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className='flex items-center justify-between md:gap-32 lg:ml-5'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      {/* search field */}
      <div className='flex items-center gap-4'>
          <div className='flex items-center  w-60 bg-slate-300 rounded-2xl px-4 py-2'>
        <span><IoSearchOutline /></span>
       <Input className={cn('p-2 border-none outline-none bg-none')} type="text" placeholder="Search..." />
        </div>
        
      <div>
        <Button className={cn("bg-white text-black hover:bg-gray-200 hover:text-gray-800 cursor-pointer")}><FaRegBell /></Button>
      </div>
    </div>

      

    </div>
  );
};

export default Navbar;