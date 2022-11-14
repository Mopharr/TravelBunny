import Link from 'next/link';
import React from 'react';

type Props = {
  open: boolean;
};

const Modal = ({ open }: Props) => (
  <div className='modal w-[220px] border z-50 fixed left-[80%] bottom-[8.5rem] rounded-xl bg-[#FF385C] text-white'>
    {open && (
      <div className='flex flex-col justify-center px-4 py-2 space-y-2'>
        <Link href='/create' className='py-2'>
          Create Trip
        </Link>

        <Link href='/attribute' className='py-2'>
          Post Attraction
        </Link>
      </div>
    )}
  </div>
);

export default Modal;
