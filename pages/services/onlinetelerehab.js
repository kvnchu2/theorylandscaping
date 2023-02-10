import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cabinets2 from "../../public/images2/cabinets2.jpg";
import Construction from "../../public/images2/construction.jpg";
import ProfileWoman from '../../public/images/profile-woman.svg';
import OnlineTraining from '../../public/images/online-training.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const OnlineTelerehab = () => {
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">Online/Telerehab</h1>
    </section>

    <section id="sbs">
        <div className="cs-container">
            {/* left image section */}
            <div className="cs-left">
                <picture className="cs-picture cs-picture1" >
                    <source media="(max-width: 600px)" srcSet="../public/images2/cabinets2-m.webp"></source>
                    <source media="(min-width: 601px)" srcSet="../public/images2/cabinets2.jpg"></source>
                    <div className="cs-picture11">
                        <Image loading="lazy" decoding="async" src={OnlineTraining} alt="house" width="522" height="581" />
                    </div>
                </picture>
                {/* <picture className="cs-picture cs-picture2">
                    <source media="(max-width: 600px)" srcSet="../public/images/construction.jpg"></source>
                    <source media="(min-width: 601px)" srcSet="../public/images/construction.jpg"></source>
                    <div className="cs-picture22">
                        <Image loading="lazy" decoding="async" src={Construction} alt="house" width="414" height="400" />
                    </div>
                </picture> */}
            </div>
            {/* right content section */}
            <div className="cs-right">
                <span className="cs-topper">Online/Telerehab</span>
                <h2 className="cs-title">Exercise from the comfort of your own home</h2>
                <p className="cs-text">
                Online Telerehab is for those who have been in a motor vehicle accident and have an active ICBC claim.  These Zoom video meetings that can take place at home include an assessment to identify rehabilitation goals, a customized exercise program, and education regarding all areas of your recovery journey.

 

                <br></br><br></br>The goal of these sessions is to return you back to your activities of daily living through active rehabilitation (a comprehensive exercise program).

 

                Telehealth Active rehabilitation is led by our Kinesiologist and takes place in your own home, using equipment you have available to you around the house.

                
                </p>
                
            </div>
        </div>
    </section>


    <section id="onlinetelerehab">
        <div className="cs-container">
            <ul className="cs-card-group">
               
                <li className="cs-item">

                    <h2>
                        New Client ICBC Active Rehab
                    </h2>

                    <h2>
                        $0
                    </h2>

                    <p>
                    Did you recently get into a car accident? Book an initial 60-minute session to begin your recovery.
                    </p>

                    <Link href="/contact"><a className="button-solid" >
                      Book your first visit
                    </a></Link>
                    
                </li>
                
                <li className="cs-item">
                    {/* <p className="cs-item-p">
                    New Client
                    </p> */}

                    <h2>
                        45-Minute ICBC Active Rehab
                    </h2>
                    
                    {/* <p className="cs-item-p">
                    $0
                    </p> */}

                    <h2>
                        $0
                    </h2>

                    <p>
                    Continue with treatment sessions so you can return to life pain-free as quickly as possible.
                    </p>

                    <Link href="/contact"><a className="button-solid" >
                      Book now
                    </a></Link>
                    
                    
                </li>
            </ul>
            
        </div>
    </section>
  </>
  );
};

export default OnlineTelerehab;