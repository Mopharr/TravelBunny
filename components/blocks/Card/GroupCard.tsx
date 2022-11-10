import Image from 'next/image';
import { GoLocation } from 'react-icons/go';
import Test from '../../../assets/images/ik.png';

const GroupCard = () => (
  <div className='flex p-8 rounded-xl border-[.5px] shadow h-[400px] w-full justify-between space-x-8'>
    <div className='relative h-[100%] w-[50%] rounded-xl'>
      <Image
        src={Test}
        alt='gourpTrip__image'
        className='absolute w-full h-full object-cover rounded-xl shadow'
      />
    </div>
    <div className='details justify-self-start w-8/12 flex flex-col space-y-8'>
      <div className='space-y-4'>
        <h3 className='font-semibold text-lg cursor-pointer hover:underline'>
          Zuma Rock Hiking
        </h3>
        <p className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          eius, possimus alias hic ipsa voluptatum velit aut omnis earum
          repellat consequatur vero enim.
        </p>
      </div>

      <div className='space-y-4'>
        <div className='flex items-center justify-start space-x-2'>
          <GoLocation size={20} />
          <p>Abuja, Nigeria</p>
        </div>
        <div className='flex items-center justify-start space-x-2'>
          <GoLocation size={20} />
          <p>Abuja, Nigeria</p>
        </div>
        <div className='flex items-center justify-start space-x-2'>
          <GoLocation size={20} />
          <p>Abuja, Nigeria</p>
        </div>
        <div className='flex items-center justify-start space-x-2'>
          <GoLocation size={20} />
          <p>Abuja, Nigeria</p>
        </div>
      </div>
    </div>
  </div>
);

export default GroupCard;
