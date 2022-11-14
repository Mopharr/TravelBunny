/* eslint-disable jsx-a11y/label-has-associated-control */
import PageHead from '../components/utils/PageHead';
import Nav from '../components/blocks/NavBar/index';
import style from '../styles/trip.module.css';

const Attribute = () => (
  <div>
    <PageHead title='Login | Travel Bunny' />

    <div className={style.details}>
      <Nav />
      <div>
        <h2>Post Attraction</h2>
        <div className={style.bIn}>
          <div className={style.in}>
            <label>Trip Title</label>
            <input type='text' />
          </div>
          <div className={style.in}>
            <label>Location</label>
            <input type='text' />
          </div>
        </div>
        <div className={style.bIn}>
          <div className={style.in}>
            <label>Description</label>
            <textarea name='' id='' cols={30} rows={10} />
          </div>
          <div className={style.in}>
            <label>Attraction</label>
            <textarea name='' id='' cols={30} rows={10} />
          </div>
        </div>
        <div className={style.bIn}>
          <div className={style.in}>
            <label>Date</label>
            <input type='text' />
          </div>
          <div className={style.in}>
            <label>Price</label>
            <input type='text' />
          </div>
        </div>
        <div className={style.bIn}>
          <div className={style.in}>
            <label>Hashtags</label>
            <input type='text' />
          </div>
          <div className={style.in}>
            <label>Add photo</label>
            <input type='file' />
          </div>
        </div>
        <div className={style.bIn}>
          <div className={style.in}>
            <button type='button'>Post Attraction</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Attribute;
