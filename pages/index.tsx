import { CgMenuRight } from 'react-icons/cg';
import { HiOutlineBell } from 'react-icons/hi';
import { GoSettings } from 'react-icons/go';
import Image from 'next/image';
import PageHead from '../components/utils/PageHead';
import Logo from '../assets/images/logo.png';
import Avatar from '../assets/images/avatar.png';

const Home = () => (
  <>
    <PageHead title='Travel Bunny' />
    <div>
      <nav className='py-5'>
        <div className='container mx-auto flex items-center justify-between'>
          <div className='flex items-center justify-center w-fit space-x-4'>
            <div className='hrounded-full border p-2 shadow rounded-full cursor-pointer'>
              <CgMenuRight size={30} />
            </div>
            <div className='relative w-52 h-12 cursor-pointer'>
              <Image
                src={Logo}
                alt='travelBunny__logo'
                className='absolute w-[100%] h-[100%]'
              />
            </div>
          </div>

          <div className='flex items-center justify-between w-6/12'>
            <div className='search border-2 border-black flex items-center w-9/12 py-3 px-4 rounded-full'>
              <input
                type='search'
                className='w-full outline-none border-none text-sm placeholder:text-sm placeholder:text-black appearance-none'
                placeholder='Search Destinations ...'
              />
              <GoSettings size={22} />
            </div>
            <div className='flex justify-between items-center w-2/12'>
              <HiOutlineBell size={28} />
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
    </div>
  </>
);

export default Home;
