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
              <h2>Organizer</h2>
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
              <h2>Organizer</h2>
              <div className={style.pla}>
                <div className={style.pText}>
                  <AiOutlineCheckCircle className={style.Icon} />{' '}
                  <span>Warm water swimming pool</span>
                </div>
                <div className={style.pText}>
                  <AiOutlineCheckCircle className={style.Icon} />{' '}
                  <span>Restaurant</span>
                </div>
                <div className={style.pText}>
                  <AiOutlineCheckCircle className={style.Icon} />{' '}
                  <span>Car Park</span>
                </div>
                <div className={style.pText}>
                  <AiOutlineCheckCircle className={style.Icon} />{' '}
                  <span>Warm water swimming pool</span>
                </div>
                <div className={style.pText}>
                  <AiOutlineCheckCircle className={style.Icon} />{' '}
                  <span>Restaurantl</span>
                </div>
                <div className={style.pText}>
                  <AiOutlineCheckCircle className={style.Icon} />{' '}
                  <span>Car Park</span>
                </div>
              </div>
            </div>
            <div className={style.drop}>
              <h2>Review (67)</h2>

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
                  nisi{' '}
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
                  nisi{' '}
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
                <span>1 * 50,000</span>
              </div>
              <div className={style.order}>
                <h3>Order summary</h3>
                <span>1 * 50,000</span>
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
