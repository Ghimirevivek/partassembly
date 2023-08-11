import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='text-[50px] font-bold '>Bibox Labs</div>
      <div className='flex items-center justify-between w-[200px]'>
        <div className='px-2 py-1 font-semibold bg-blue-700 w-auto h-12 rounded-md flex items-center justify-center hover:bg-blue-900 hover:scale-105 text-white'>
          Talk to expert
        </div>
        <div className='bg-blue-700 w-14 h-12 rounded-md flex items-center justify-center hover:bg-blue-900 hover:scale-105'>
          <AiOutlineMenu className='text-xl text-[white] cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
