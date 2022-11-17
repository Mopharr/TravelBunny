import Link from 'next/link';
import React from 'react';
import { BsClipboardPlus, BsPlusCircle } from 'react-icons/bs';

type Props = {
  open: boolean;
};

const Modal = ({ open }: Props) => (
  <div className='modal w-[220px] z-50 fixed left-[40%] sm:left-[60%] lg:left-[80%] bottom-[8rem] rounded-xl bg-[#FF385C] text-white'>
    {open && (
      <div className='flex flex-col justify-center'>
        <Link
          href='/create'
          className='flex items-center py-4 pl-4 space-x-2 hover:bg-[#ff4d6d] rounded-xl'
        >
          <BsPlusCircle size={30} />
          <span className='text-lg font-semibold'>Create Trip</span>
        </Link>

        <Link
          href='/attribute'
          className='flex items-center py-4 pl-4 space-x-2 hover:bg-[#ff4d6d] rounded-xl'
        >
          <BsClipboardPlus size={30} />
          <span className='text-lg font-semibold'>Post Attraction</span>
        </Link>
      </div>
    )}
  </div>
);

export default Modal;
