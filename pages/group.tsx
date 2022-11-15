import { BsFillShareFill, BsFillBookmarkFill } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineCheckCircle, AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlinePayment } from 'react-icons/md';
import PageHead from '../components/utils/PageHead';
import Nav from '../components/blocks/NavBar/index';
import style from '../styles/details.module.css';

const Group = () => (
  <div>
    <PageHead title='Login | Travel Bunny' />

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
              <FaRegUserCircle className={style.Icon} />
              <span>Daniel Abayomi</span>
            </div>
            <div className={style.location}>
              <AiOutlineCalendar className={style.Icon} />
              <span>11, october 2022</span>
            </div>
            <div className={style.location}>
              <MdOutlinePayment className={style.Icon} />
              <span>N50,000</span>
            </div>
            <div className={style.location}>
              <button type='button'>#Lake</button>
              <button type='button'>#swim</button>
            </div>

            <div className={style.round}>
              <div className={style.roundCap} />
              <div className={style.roundCap1} />
              <div className={style.roundCap2} />
              <div className={style.roundCap3} />
              <div className={style.roundCap4} />
              <div className={style.roundCap5}>
                <p>50+ People</p>
              </div>
            </div>

            <div className={style.desc}>
              <h2>Description</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
                dolorem possimus corrupti a, dolorum quam excepturi non quas
                reprehenderit minima. Quasi saepe, iste voluptas ducimus, harum
                id tenetur eius quam recusandae adipisci, earum eos? Amet
                distinctio tempore eaque officia ipsa.
              </p>
            </div>

            <div className={style.drop}>
              <h2>Attractions</h2>
              <div className='grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-3'>
                <div className='flex items-center justify-start space-x-2'>
                  <AiOutlineCheckCircle size={30} />{' '}
                  <span className='text-sm'>Rock Climbing</span>
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
              <h2>Comments (67)</h2>

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
              <h2>Proceed to make payment for this group trip.</h2>

              <div className={style.select}>
                <h1>Number of tickets</h1>
                <select name='' id=''>
                  <option value='1'>1</option>
                  <option value='1'>2</option>
                  <option value='1'>3</option>
                  <option value='1'>4</option>
                  <option value='1'>5</option>
                </select>
              </div>

              <button className={style.btb} type='submit'>
                Book Trip
              </button>

              <div className={style.order}>
                <h3>Order summary</h3>
                <span>1 x 50,000</span>
              </div>
              <div className={style.order}>
                <h3>Order summary</h3>
                <span>1 x 50,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.nrr} />
    </div>
  </div>
);

export default Group;
