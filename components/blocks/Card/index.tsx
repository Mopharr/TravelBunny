import Image from 'next/image';
import { HiStar, HiOutlineStar } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import Link from 'next/link';

type Props = {
  img: string;
  resortName: string;
  resortLocation: string;
  resortRating: string;
  hasRating: boolean;
};

const Card = ({
  img,
  resortName,
  resortLocation,
  resortRating,
  hasRating,
}: Props) => (
  <Link
    href='/details'
    className='flex flex-col justify-between h-[450px] rounded-xl shadow-xl p-5 cursor-pointer'
  >
    <div className='city__image-container relative h-[70%] w-full rounded-xl grayscale-0 hover:grayscale hover:scale-105 transition ease-in-out duration-800'>
      <Image
        src={img}
        alt='city__image'
        className='absolute w-[100%] h-[100%] object-cover rounded-xl shadow'
        fill
      />
    </div>
    <div className='text-base space-y-[0.5rem] mb-2'>
      <h3 className='font-semibold cursor-pointer hover:text-[#36454f] hover:underline text-xl'>
        {resortName}
      </h3>
      <div className='flex items-center justify-start space-x-3'>
        <GoLocation size={20} />
        <p>{resortLocation}</p>
      </div>
      <div className=''>
        <div className=''>
          {hasRating ? (
            <div className='flex items-center justify-start space-x-2'>
              <HiStar color='#F0A938' size={24} />
              <p>{resortRating}</p>
            </div>
          ) : (
            <div className='flex items-center justify-start space-x-2'>
              <HiOutlineStar size={24} />
              <p>{resortRating}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </Link>
);

export default Card;
