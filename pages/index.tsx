import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import PageHead from '../components/utils/PageHead';
import CityImg from '../assets/images/ik.png';
import NikeImg from '../assets/images/nk.png';
import YankariImg from '../assets/images/yankari.jpeg';
import NavBar from '../components/blocks/NavBar';
import { cities, groupTrips } from '../components/utils/travelBunnyData';

const Card = dynamic(() => import('../components/blocks/Card'));
const GroupCard = dynamic(() => import('../components/blocks/Card/GroupCard'));

const Home = () => (
  <>
    <PageHead title='Travel Bunny' />
    <div>
      <NavBar />
      <main className='main container mx-auto my-4'>
        <div className='cities my-8 px-6 lg:px-0'>
          <div className='heading flex items-center justify-between'>
            <h1 className='font-semibold text-xl'>Explore cities</h1>
            <Link
              href='/all-cities'
              className='text-sm text-[#FF385C] hover:underline hover:text-[#FF385C]'
            >
              See all
            </Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-14'>
            {cities.map(
              ({
                id,
                img,
                resortName,
                resortLocation,
                resortRating,
                hasRating,
              }: any) => (
                <Card
                  key={id}
                  img={img}
                  resortName={resortName}
                  resortLocation={resortLocation}
                  resortRating={resortRating}
                  hasRating={hasRating}
                />
              )
            )}
          </div>
        </div>
        <div className='cities my-20 px-6 lg:px-0'>
          <div className='heading flex items-center justify-between'>
            <h1 className='font-semibold text-xl'>Group Trips</h1>
            <Link
              href='/all-cities'
              className='text-sm text-[#FF385C] hover:text-[#FF385C] hover:underline'
            >
              See all
            </Link>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-14'>
            {groupTrips.map(
              ({
                id,
                img,
                resortName,
                resortDescription,
                resortLocation,
                resortPrice,
                tourDate,
                tourAgent,
              }) => (
                <GroupCard
                  key={id}
                  img={img}
                  resortName={resortName}
                  resortDescription={resortDescription}
                  resortLocation={resortLocation}
                  resortPrice={resortPrice}
                  tourDate={tourDate}
                  tourAgent={tourAgent}
                />
              )
            )}
          </div>
        </div>
      </main>
    </div>
  </>
);

export default Home;
