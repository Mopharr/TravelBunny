import { CgMenuRight } from 'react-icons/cg';
import { HiOutlineBell } from 'react-icons/hi';
import { GoSettings } from 'react-icons/go';
import Image from 'next/image';
import Logo from '../../../assets/images/logo.png';
import Avatar from '../../../assets/images/avatar.png';

type Props = {};

const NavBar = (props: Props) => (
  <nav className='py-5 px-5 lg:px-4 sticky top-0 z-50 bg-white shadow-inner'>
    <div className='container mx-auto flex items-center justify-between'>
      <div className='flex items-center justify-center w-fit space-x-4'>
        <div className='hrounded-full border p-2 shadow rounded-full cursor-pointer'>
          <CgMenuRight size={30} />
        </div>
        <div className='relative w-40 h-8 cursor-pointer'>
          <Image
            src={Logo}
            alt='travelBunny__logo'
            className='absolute w-[100%] h-[100%]'
          />
        </div>
      </div>

      <div className='md:flex items-center justify-between w-6/12 hidden '>
        <div className='search border-2 border-black flex items-center md:w-11/12 lg:w-10/12 py-3 px-4 rounded-full'>
          <input
            type='search'
            className='w-full outline-none border-none text-sm placeholder:text-sm placeholder:text-grey-400 appearance-none'
            placeholder='Search Destinations ...'
          />
          <div className='border-l-2 border-black pl-2 cursor-pointer'>
            <GoSettings size={22} />
          </div>
        </div>
        <div className='lg:flex justify-center items-center w-2/12 space-x-4 hidden'>
          <HiOutlineBell size={32} />
          <div className='avatar__img relative w-8 h-8'>
            <Image
              src={Avatar}
              alt='avatar'
              className='absolute w-[100%] h-[100%]'
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
