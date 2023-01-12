import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cabinets2 from "../../public/images2/cabinets2.jpg";
import Construction from "../../public/images2/construction.jpg";
import ProfileWoman from '../../public/images/profile-woman.svg';


const IcbcActiveRehabilitation = () => {
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">ICBC Active Rehabilitation</h1>
    </section>

    <section id="sbs">
        <div class="cs-container">
            {/* left image section */}
            <div class="cs-left">
                <picture class="cs-picture cs-picture1" >
                    <source media="(max-width: 600px)" srcSet="../public/images2/cabinets2-m.webp"></source>
                    <source media="(min-width: 601px)" srcSet="../public/images2/cabinets2.jpg"></source>
                    <div className="cs-picture11">
                        <Image loading="lazy" decoding="async" src={Cabinets2} alt="house" width="522" height="581" />
                    </div>
                </picture>
                <picture class="cs-picture cs-picture2">
                    <source media="(max-width: 600px)" srcSet="../public/images/construction.jpg"></source>
                    <source media="(min-width: 601px)" srcSet="../public/images/construction.jpg"></source>
                    <div className="cs-picture22">
                        <Image loading="lazy" decoding="async" src={Construction} alt="house" width="414" height="400" />
                    </div>
                </picture>
            </div>
            {/* right content section */}
            <div class="cs-right">
                <span class="cs-topper">About Us</span>
                <h2 class="cs-title">About Company Title</h2>
                <p class="cs-text">
                    In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatoureanor mauris laoreet, iaculis libero quis. Curabitur et tempus eri consequat tincidunt turpis sit amet imperdiet. Praesent nonatourean olei aptent taciti sociosqu ad litora torquent per.
                </p>
                <p class="cs-text">
                    In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatoureanor mauris laoreet, iaculis libero quis. Curabitur et tempus eri consequat tincidunt turpis sit amet imperdiet. Praesent nonatourean olei aptent taciti sociosqu ad litora torquent per.
                </p>
                <div class="cs-flex-group">
                    <p class="cs-flex-p">
                        In consequat tincidunt turpis sit amet imperdiet. Praesent Classei consequat tincidunt turpis sit amet imperdiet for mind.
                    </p>
                    <span class="cs-name">Justin Time</span>
                    <span class="cs-job">CEO-Founder</span>
                    <img class="cs-quote-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/quote-white.svg" alt="gavel" width="136" height="77"></img>
                </div>
                
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