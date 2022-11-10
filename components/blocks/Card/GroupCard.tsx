import Image from 'next/image';
import { GoLocation } from 'react-icons/go';
import { HiOutlineCalendar, HiOutlineUserCircle } from 'react-icons/hi';
import { BsCashCoin } from 'react-icons/bs';
import Test from '../../../assets/images/ik.png';

type Props = {
  img: any;
  resortName: string;
  resortDescription: string;
  resortLocation: string;
  resortPrice: string;
  tourDate: string;
  tourAgent: string;
};

const GroupCard = ({
  img,
  resortName,
  resortDescription,
  resortLocation,
  resortPrice,
  tourDate,
  tourAgent,
}: Props) => (
  <div className='flex p-8 rounded-xl shadow-2xl h-[400px] w-full justify-between space-x-8'>
    <div className='relative h-[100%] w-[50%] rounded-xl transition ease-in-out duration-800 hover:scale-105'>
      <Image
        src={img}
        alt='gourpTrip__image'
        className='absolute w-full h-full object-cover rounded-xl shadow'
        loading='lazy'
      />
    </div>
    <div className='details justify-self-start w-8/12 flex flex-col space-y-8'>
      <div className='space-y-4'>
        <h3 className='font-semibold text-lg cursor-pointer hover:underline'>
          {resortName}
        </h3>
        <p className='text-base'>{resortDescription}</p>
      </div>

      <div className='space-y-4'>
        <div className='flex items-center justify-start space-x-2'>
          <GoLocation size={20} />
          <p>{resortLocation}</p>
        </div>
        <div className='flex items-center justify-start space-x-2'>
          <HiOutlineUserCircle size={20} />
          <p>{tourAgent}</p>
        </div>
        <div className='flex items-center justify-start space-x-2'>
          <HiOutlineCalendar size={20} />
          <p>{tourDate}</p>
        </div>
        <div className='flex items-center justify-start space-x-2'>
          <BsCashCoin size={20} />
          <p>₦ {resortPrice}</p>
        </div>
      </div>
    </div>
  </div>
);

export default GroupCard;
