import Image from 'next/image';
import { HiStar } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';

type Props = {
  img: string;
  resortName: string;
  resortLocation: string;
  resortRating: string;
};

const Card = ({ img, resortName, resortLocation, resortRating }: Props) => (
  <div className='flex flex-col justify-between h-[450px] rounded-xl shadow-lg p-5'>
    <div className='city__image-container relative h-[70%] w-full rounded-xl'>
      <Image
        src={img}
        alt='city__image'
        className='absolute w-[100%] h-[100%] object-cover rounded-xl shadow'
      />
    </div>
    <div className='text-base space-y-[0.5rem] mb-2'>
      <h3 className='font-semibold'>{resortName}</h3>
      <div className='flex items-center justify-start space-x-3'>
        <GoLocation size={20} />
        <p>{resortLocation}</p>
      </div>
      <div className='review'>
        <div className='stat__rating flex items-center justify-start space-x-2'>
          <HiStar color='#F0A938' size={24} />
          <p>{resortRating}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
