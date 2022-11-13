import React from "react";

import style from "../styles/details.module.css";

// @ts-expect-error this module doesn't have types and I was lazy adding them.
import Bounce from "react-reveal/Bounce";

const Details = () => {
  return (
    <div>
      <div className={style.details}>
        <div className={style.b4Div}>
          <h2 className={style.h22}>
            Bauchi State flood victims fundraising campaign
          </h2>
          <div className={style.detailsCap}>
            <div className={style.lef}>
              <img src="/tra2.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum
                viverra tellus, amet proin in semper arcu. Leo quis vitae
                scelerisque erat urna,i Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Rutrum viverra tellus, amet proin in semper
                arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Rutrum viverra tellus,
                amet proin in semper
              </p>
              <hr />

              <span>Created 7 days ago</span>
              <hr />

              <div className={style.drop}>
                <h2>Organizer</h2>
                <div className={style.orgaN}>
                  <img src="fh1.png" alt="" />
                  <div className={style.name}>
                    <p className={style.pp}>Solomon Okonkwo</p>
                    <button>Contact</button>
                  </div>
                </div>
              </div>

              <hr />

              <div className={style.drop}>
                <h2>Drop off location</h2>

                <div className={style.orgaN}>
                  <img src="fh1.png" alt="" />
                  <div className={style.name}>
                    <p>Lagos state</p>
                    <span>
                      No 21 Olawale Cole Onitiri Avenue, Lekki Phase 1 -
                      Johathan Irondi +2349033202021{" "}
                    </span>
                  </div>
                </div>

                <div className={style.orgaN}>
                  <img src="fh1.png" alt="" />
                  <div className={style.name}>
                    <p>Lagos state</p>
                    <span>
                      No 21 Olawale Cole Onitiri Avenue, Lekki Phase 1 -
                      Johathan Irondi +2349033202021{" "}
                    </span>
                  </div>
                </div>

                <div className={style.orgaN}>
                  <img src="fh1.png" alt="" />
                  <div className={style.name}>
                    <p>Onitsha, Anambra State</p>
                    <span>
                      No 21 Olawale Cole Onitiri Avenue, Lekki Phase 1 -
                      Johathan Irondi +2349033202021{" "}
                    </span>
                  </div>
                </div>
              </div>
              <hr />

              <div className={style.drop}>
                <h2>Office Account</h2>

                <div className={style.orgaN}>
                  <img src="fh1.png" alt="" />
                  <div className={style.name}>
                    <p>Guaranty Trust Bank Naira Account</p>
                    <span>
                      Account Number - 0023412632 <br />
                    </span>
                    <span>Account Name - Jonathan Irondi</span>
                  </div>
                </div>

                <div className={style.orgaN}>
                  <img src="fh1.png" alt="" />
                  <div className={style.name}>
                    <p>Access Bank - Dollar Account</p>
                    <span>
                      Account Number - 0023412632 <br />
                    </span>
                    <span>Account Name - Jonathan Irondi</span>
                  </div>
                </div>
              </div>
              <hr />

              <div className={style.supp}>
                <h2>Words Of Support (25)</h2>

                <div className={style.orgaN}>
                  <img src="fh1.png" alt="" />
                  <div className={style.name}>
                    <span>Abu Waris</span>
                    <p>$150,000</p>
                    <h6>(2 days ago)</h6>
                  </div>
                </div>

                <div className={style.orgaN}>
                  <img src="fh1.png" alt="" />
                  <div className={style.name}>
                    <span>Abu Waris</span>
                    <p>$150,000</p>
                    <h6>(2 days ago)</h6>
                  </div>
                </div>

                <div className={style.orgaN}>
                  <img src="fh1.png" alt="" />
                  <div className={style.name}>
                    <span>Abu Waris</span>
                    <p>$150,000</p>
                    <h6>(2 days ago)</h6>
                  </div>
                </div>
               </div>
            </div>
            <div className={style.rig}>
              <div className={style.proG}>
                <div className={style.proB}></div>
              </div>
              <div className={style.nm}>
                <div className={style.gg}>
                  <h3>Goal</h3>
                  <span>$150,000</span>
                </div>
                <div className={style.gg}>
                  <h3>Raise</h3>
                  <span>$150,000</span>
                </div>
              </div>
              <button className={style.btnD}>Donate Now</button> <br />
              <button className={style.btnW}>Share</button>
              <div className={style.dAmt}>
                <h3>Donation(15)</h3>
                <div className={style.orgaN}>
                  <img src="fh1.png" alt="" />
                  <div className={style.name}>
                    <p>Abu Waris</p>
                    <span>$150,000</span>
                    <h6>(2 days ago)</h6>
                  </div>
                </div>
                <div className={style.orgaN}>
                  <img src="fh1.png" alt="" />
                  <div className={style.name}>
                    <p>Abu Waris</p>
                    <span>$150,000</span>
                    <h6>(2 days ago)</h6>
                  </div>
                </div>
                <div className={style.orgaN}>
                  <img src="fh1.png" alt="" />
                  <div className={style.name}>
                    <p>Abu Waris</p>
                    <span>$150,000</span>
                    <h6>(2 days ago)</h6>
                  </div>
                </div>
              </div>
              <button className={style.btnW}>Share</button>
            </div>
          </div>
        </div>

        <div className={style.nrr}></div>
      </div>
    </div>
  );
};

export default Details;
