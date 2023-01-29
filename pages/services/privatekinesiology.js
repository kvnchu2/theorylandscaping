import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cabinets2 from "../../public/images2/cabinets2.jpg";
import Construction from "../../public/images2/construction.jpg";
import ProfileWoman from '../../public/images/profile-woman.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const PrivateKinesiology = () => {
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">Private Kinesiology</h1>
    </section>

    <section id="sbs">
        <div className="cs-container">
            {/* left image section */}
            <div className="cs-left">
                <picture className="cs-picture cs-picture1" >
                    <source media="(max-width: 600px)" srcSet="../public/images2/cabinets2-m.webp"></source>
                    <source media="(min-width: 601px)" srcSet="../public/images2/cabinets2.jpg"></source>
                    <div className="cs-picture11">
                        <Image loading="lazy" decoding="async" src={Cabinets2} alt="house" width="522" height="581" />
                    </div>
                </picture>
                <picture className="cs-picture cs-picture2">
                    <source media="(max-width: 600px)" srcSet="../public/images/construction.jpg"></source>
                    <source media="(min-width: 601px)" srcSet="../public/images/construction.jpg"></source>
                    <div className="cs-picture22">
                        <Image loading="lazy" decoding="async" src={Construction} alt="house" width="414" height="400" />
                    </div>
                </picture>
            </div>
            {/* right content section */}
            <div className="cs-right">
                <span className="cs-topper">ICBC Active Rehabilitation</span>
                <h2 className="cs-title">Healing through movement</h2>
                <p className="cs-text">
                Kinesiologists are movement specialists who use evidence-informed techniques to help you meet your health-related goals and support your movement needs.

                Following thorough assessment, I design personalized active rehabilitation programs to guide you towards your unique goals. I work within a range of modalities, including corrective exercises, postural education, and breathwork, helping you to improve function and deepen your mind-body connection. Through physical activity you can build trust and confidence in your body and rise to the challenges of daily life.

                I work with clients of all ages and abilities to help them move and feel their best. I will empower you with the tools and knowledge to make lasting positive changes in your life.
                </p>
                
                {/* <div class="cs-flex-group">
                    <p class="cs-flex-p">
                        In consequat tincidunt turpis sit amet imperdiet. Praesent Classei consequat tincidunt turpis sit amet imperdiet for mind.
                    </p>
                    <span class="cs-name">Justin Time</span>
                    <span class="cs-job">CEO-Founder</span>
                    <img class="cs-quote-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/quote-white.svg" alt="gavel" width="136" height="77"></img>
                </div> */}
                
            </div>
        </div>
    </section>

    <section id="activerehab-content">
        
        <p>
            Exercise-based therapy is an effective approach to:

            <br/><br/><FontAwesomeIcon className="angle-right-icon" icon={faAngleRight} /> prevent and recover from injury

            <br/><br/><FontAwesomeIcon className="angle-right-icon" icon={faAngleRight} /> manage chronic pain and illness

            <br/><br/><FontAwesomeIcon className="angle-right-icon" icon={faAngleRight} /> prepare for return to work or your favorite activity

            <br/><br/><FontAwesomeIcon className="angle-right-icon" icon={faAngleRight} /> improve health, function, and quality of life

            
        </p>
        
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

export default PrivateKinesiology;