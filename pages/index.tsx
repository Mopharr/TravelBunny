/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import PageHead from '../components/utils/PageHead';
import NavBar from '../components/blocks/NavBar';
import { cities, groupTrips } from '../components/utils/travelBunnyData';
import style from '../styles/details.module.css';
import Modal from '../components/elements/Modal';

const Card = dynamic(() => import('../components/blocks/Card'));
const GroupCard = dynamic(() => import('../components/blocks/Card/GroupCard'));

const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <PageHead title='Travel Bunny' />
      <div>
        <NavBar />
        <main className='container mx-auto my-4 main'>
          <div className='px-6 my-8 cities lg:px-0'>
            <div className='flex items-center justify-between heading'>
              <h1 className='text-xl font-semibold'>Explore cities</h1>
              <Link
                href='/all-cities'
                className='text-sm text-[#FF385C] hover:underline hover:text-[#FF385C]'
              >
                See all
              </Link>
            </div>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 my-14'>
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
          <div className='px-6 my-20 cities lg:px-0'>
            <div className='flex items-center justify-between heading'>
              <h1 className='text-xl font-semibold'>Group Trips</h1>
              <Link
                href='/all-cities'
                className='text-sm text-[#FF385C] hover:text-[#FF385C] hover:underline'
              >
                See all
              </Link>
            </div>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 my-14'>
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
          {/* <Modal open /> */}
        </main>

        <div
          role='button'
          className={style.plus}
          onClick={() => setShowModal(!showModal)}
        >
          <p>+</p>
        </div>
      </div>
      {showModal && <Modal open />}
    </>
  );
};

export default Home;
