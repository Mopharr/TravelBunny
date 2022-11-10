import Image from 'next/image';
import Test from '../../../assets/images/ik.png';

const GroupCard = () => (
  <div className='flex p-5 rounded-xl shadow-lg h-[400px] w-full justify-between space-x-6'>
    <div className='relative h-[100%] w-[40%] rounded-xl'>
      <Image
        src={Test}
        alt='gourpTrip__image'
        className='absolute w-full h-full object-cover rounded-xl shadow'
      />
    </div>
    <div className='details justify-self-start w-10/12'>
      <h3>Zuma Rock Hiking</h3>
    </div>
  </div>
);

export default GroupCard;
