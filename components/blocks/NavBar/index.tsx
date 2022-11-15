import { CgMenuRight } from 'react-icons/cg';
import { HiOutlineBell } from 'react-icons/hi';
import { GoSettings } from 'react-icons/go';
import Image from 'next/image';
import Link from 'next/link';
// import Logo from '../../../assets/images/logo.png';
// import Avatar from '../../../assets/images/avatar.png';

type Props = {};

const NavBar = (props: Props) => (
  <nav className='sticky top-0 z-50 px-5 py-5 bg-white shadow-inner lg:px-4'>
    <div className='container flex items-center justify-between mx-auto'>
      <Link
        href='/dashboard'
        className='flex items-center justify-center space-x-4 w-fit'
      >
        <div className='p-2 border rounded-full shadow cursor-pointer hrounded-full'>
          <CgMenuRight size={30} />
        </div>
        <div className='relative w-40 h-8 cursor-pointer'>
          <Image
            src='/images/logo.png'
            alt='travelBunny__logo'
            className='absolute w-[100%] h-[100%]'
            fill
          />
        </div>
      </Link>

      <div className='items-center justify-between hidden w-6/12 md:flex '>
        <div className='flex items-center px-4 py-3 border-2 border-black rounded-full search md:w-11/12 lg:w-10/12'>
          <input
            type='search'
            className='w-full text-sm border-none outline-none appearance-none placeholder:text-sm placeholder:text-grey-400'
            placeholder='Search Destinations ...'
          />
          <div className='pl-2 border-l-2 border-black cursor-pointer'>
            <GoSettings size={22} />
          </div>
        </div>
        <div className='items-center justify-center hidden w-2/12 space-x-4 lg:flex'>
          <HiOutlineBell size={32} />
          <div className='relative w-8 h-8 avatar__img'>
            <Image
              src='/images/avatar.png'
              alt='avatar'
              className='absolute w-[100%] h-[100%]'
              fill
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
