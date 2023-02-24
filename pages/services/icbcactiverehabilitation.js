import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import SidePlank from '../../public/images/side-plank.jpg';
import CarAccident from '../../public/images/car-accident.jpg';

const IcbcActiveRehabilitation = () => {
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">ICBC Active Rehabilitation</h1>
    </section>

    <section id="sbs">
        <div className="cs-container">
            {/* left image section */}
            <div className="cs-left">
                <picture className="cs-picture cs-picture1" >
                    <source media="(max-width: 600px)" srcSet="../public/images2/cabinets2-m.webp"></source>
                    <source media="(min-width: 601px)" srcSet="../public/images2/cabinets2.jpg"></source>
                    <div className="cs-picture11">
                        <Image loading="lazy" decoding="async" src={CarAccident} alt="house" width="522" height="581" />
                    </div>
                </picture>
            </div>
            {/* right content section */}
            <div className="cs-right">
                <span className="cs-topper">ICBC Active Rehabilitation</span>
                <h2 className="cs-title">Regain your function</h2>
                <p className="cs-text">
                Car accidents can be frustrating and have a negative impact on your health and well-being. This is the reason I develop active rehab programs designed to help you recover from injury quickly and return to your pre-accident function barrier free.

                
                </p>
                
                
            </div>
        </div>
    </section>

    <section id="reverse-sbs">
        <div className="reverse-cs-container">
            {/* left image section */}
            {/* right content section */}
            <div className="reverse-cs-right">
                {/* <span className="reverse-cs-topper">Medical conditions treated by active rehabilitation</span> */}
                <h2 className="reverse-cs-title">Medical conditions treated by active rehabilitation</h2>
                <p className="reverse-cs-text">
                <p>
            

            <br/><br/><FontAwesomeIcon className="angle-right-icon" icon={faAngleRight} /> Whiplash/Neck injuries

            <br/><br/><FontAwesomeIcon className="angle-right-icon" icon={faAngleRight} /> Wrist, elbow, and shoulder soft-tissue injuries

            <br/><br/><FontAwesomeIcon className="angle-right-icon" icon={faAngleRight} /> Hip, knee, and ankle soft-tissue injuries

            <br/><br/><FontAwesomeIcon className="angle-right-icon" icon={faAngleRight} /> Fractures and broken bones post-healing.

            
        </p>

                
                </p>
                
                
            </div>
            <div className="reverse-cs-left">
                <picture className="reverse-cs-picture reverse-cs-picture1" >
                    <source media="(max-width: 600px)" srcSet="../public/images2/cabinets2-m.webp"></source>
                    <source media="(min-width: 601px)" srcSet="../public/images2/cabinets2.jpg"></source>
                    <div className="reverse-cs-picture11">
                        <Image className="reverse-cs-picture-image" loading="lazy" decoding="async" src={SidePlank} alt="house" width="522" height="581"/>
                    </div>
                </picture>
            </div>
        </div>
    </section>

    <section id="activerehab">
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

export default IcbcActiveRehabilitation;