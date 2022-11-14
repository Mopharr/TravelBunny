import PageHead from "../components/utils/PageHead";

import Nav from "../components/blocks/NavBar/index";
import style from "../styles/trip.module.css";

const Attribute = () => {
  return (
    <div>
      <PageHead title="Login | Travel Bunny" />

      <div className={style.details}>
        <Nav />

        <div>
          <h2>Create Trip</h2>
          <div className={style.bIn}>
            <div className={style.in}>
              <label>Trip Title</label>
              <input type="text" />
            </div>
            <div className={style.in}>
              <label>Location</label>
              <input type="text" />
            </div>
          </div>
          <div className={style.bIn}>
            <div className={style.in}>
              <label>Description</label>
              <textarea name="" id="" cols={30} rows={10}></textarea>
            </div>
            <div className={style.in}>
              <label>Attraction</label>
              <textarea name="" id="" cols={30} rows={10}></textarea>
            </div>
          </div>
          <div className={style.bIn}>
            <div className={style.in}>
              <label>Date</label>
              <input type="text" />
            </div>
            <div className={style.in}>
              <label>Price</label>
              <input type="text" />
            </div>
          </div>
          <div className={style.bIn}>
          
            <div className={style.in}>
              <label>Hashtags</label>
              <input type="text" />
            </div>
            <div className={style.in}>
              <label>Add photo</label>
              <input type="file" />
            </div>
          </div>
          <div className={style.bIn}>
            <div className={style.in}>
             <button>Create Animation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attribute
