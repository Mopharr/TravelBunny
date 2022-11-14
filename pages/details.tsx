import React from 'react';
import { BsFillShareFill, BsFillBookmarkFill } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { AiFillStar, AiOutlineCheckCircle } from 'react-icons/ai';
import Nav from '../components/blocks/NavBar/index';
import style from '../styles/details.module.css';

const Details = () => (
  <div>
    <div className={style.details}>
      <Nav />
      <div className={style.b4Div}>
        <div className={style.detailsCap}>
          <div className={style.lef}>
            <img src='/tra2.png' alt='logo' />
            <div className={style.lText}>
              <h2>Ikogosi Warm Spring Resort</h2>
              <div className={style.tIcon}>
                <BsFillBookmarkFill className={style.Icon} />
                <BsFillShareFill className={style.Icon} />
              </div>
            </div>
            <div className={style.location}>
              <GrLocation className={style.Icon} />
              <span>Ekiti State, Nigeria</span>
            </div>
            <div className={style.location}>
              <AiFillStar className={style.star} />
              <span>4.8</span> |<span className={style.link}>67 Reviews</span>
            </div>
            <div className={style.location}>
              <button type='button'>#Lake</button>
              <button type='button'>#swimming</button>
            </div>

            <div className={style.desc}>
              <h2>Description</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum
                viverra tellus, amet proin in semper arcu. Leo quis vitae
                scelerisque erat urna,i Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Rutrum viverra tellus, amet proin in semper
                arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Rutrum viverra tellus,
                amet proin in semper
              </p>
            </div>

            <div className={style.drop}>
              <h2>Attractions</h2>
              <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3'>
                <div className='flex items-center justify-start space-x-2'>
                  <AiOutlineCheckCircle size={30} />{' '}
                  <span className='text-sm'>Private Swimming Pool</span>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                  <AiOutlineCheckCircle size={30} />{' '}
                  <span className='text-sm'>Restaurant</span>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                  <AiOutlineCheckCircle size={30} />{' '}
                  <span className='text-sm'>Car Park</span>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                  <AiOutlineCheckCircle size={30} />{' '}
                  <span className='text-sm'>Paint Ball</span>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                  <AiOutlineCheckCircle size={30} />{' '}
                  <span className='text-sm'>Games Night</span>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                  <AiOutlineCheckCircle size={30} />{' '}
                  <span className='text-sm'>Ferris Wheel</span>
                </div>
              </div>
            </div>
            <div className={style.drop}>
              <h2>Reviews</h2>
              <div>
                <div className={style.orgaN}>
                  <img src='/tra1.png' alt='' />
                  <div className={style.name}>
                    <p>David Adewale</p>
                    <span>22, October 2022</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Eget porttitor neque
                  pellentesque diam. Felis nunc scelerisque nibh enim nec mi
                  viverra diam risus. Laoreet lacus dui vel nisl suspendisse
                  nisi
                </p>
              </div>
              <div>
                <div className={style.orgaN}>
                  <img src='/tra1.png' alt='' />
                  <div className={style.name}>
                    <p>David Adewale</p>
                    <span>22, October 2022</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Eget porttitor neque
                  pellentesque diam. Felis nunc scelerisque nibh enim nec mi
                  viverra diam risus. Laoreet lacus dui vel nisl suspendisse
                  nisi
                </p>
              </div>
            </div>
          </div>
          <div className={style.rright}>
            <img src='/tra1.png' alt='' />
            <div className={style.rig}>
              <h2>Get access to so much more from our 3rd party partners</h2>

              <button type='button'>Find Hotels Around</button>
              <button type='button'>Book a flight to Location</button>
              <button type='button'>Book Taxi</button>
              <button type='button'>Chatter Bus</button>
              <button type='button'>Find Event Around</button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.nrr} />
    </div>
  </div>
);

export default Details;
