import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from '../public/images/phone.svg';
import phoneDark from '../public/images/phone-dark.svg';
import Landscaping from '../public/images/landscaping.png';
import Lawnmower from '../public/images/lawnmower.png';
import Gardening from '../public/images/gardening.png';
import Hedge from '../public/images/hedge.jpg';
import PowerRaking from '../public/images/powerraking.jpg';
import Spring from '../public/images/spring.jpg';
import Aeration from '../public/images/aeration.png';
import Pruning from '../public/images/pruning.jpg';
import PressureWasher from '../public/images/pressure-washer.jpg';
import Snow from '../public/images/snow.jpg';
import Junk from '../public/images/junk.jpg';
import Cta from '../public/images/cta.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <>
      <section id="hero">
          <div className="hero-content">
              <div className="heroText">
                  <h1 id="home-h">Showcase Nature's Features</h1>
                  <p>
                  We specialize in new landscaping jobs, maintenance for Strata properties,  commercial and residential properties.
                  </p>
                  <div className="buttons">
                      
                      <Link href="/contact">
                        <div className="button-solid">
                          Book Now
                        </div>
                      </Link>
                      
                      <a className="call-now" href="tel:555-213-9120">
                          <div className="light">
                            <Image decoding="async" src={phone} alt="" aria-hidden="true" width="21" height="21"/>
                          </div>
                          <div className="dark">
                            <Image className="dark" decoding="async" src={phoneDark} alt="" aria-hidden="true" width="21" height="21"/>
                          </div>
                          <div className="group">
                              <span className="text">Call Now</span>
                              <span className="number">(604) 808-5339</span>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
      </section>

    <section className="services-top">
        
        <div className="card">
            <picture className="picture">
                <Image src={Landscaping} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Landscaping</h2>
            <p>
            At Theory Landscaping we specialize in hardscaping, landscape design and landscape installation.
            </p>
        </div>
        <div className="card">
            <picture>
                <Image aria-hidden="true" decoding="async" src={Lawnmower} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Lawn Care</h2>
            <p>
            Mowing your lawn regularly keeps your property looking clean, tidy, well-maintained and welcoming.
            </p>
        </div>
        <div className="card">
            <picture>
                <Image aria-hidden="true" decoding="async" src={Gardening} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Garden Maintenance</h2>
            <p>
            Our local experts tailor their services to meet your gardening needs.
            </p>
        </div>
    </section>

    <section id="about" className="sidebyside">
            <div className="left">
                <h2 className="title">Dedication. Commitment. Excellence.</h2>
                 <p>
                 It’s no secret that we love what we do. Working with nature to showcase the best of its beauty sparks a natural passion in our team. This is why Theory Landscaping has built a strong reputation. Hard work, dedication and creativity are at the heart of all of our projects. Get in touch to learn more about how we can transform your outdoor space into something spectacular.
                 </p>
                 <p>
                 At Theory Landscaping, we work with you to build a successful business relationship and make sure you get the most out of our services. Communication and involvement are key, so feel free to let us know how we can accommodate your needs.
                 </p>
                 <Link href="/contact"><a className="button-solid">Contact Us</a></Link>
            </div>
            <picture className="right">
                <source media="(max-width: 600px)" srcSet="https://d33wubrfki0l68.cloudfront.net/d0ffbfdeb07c04903e25b30344e05b3d12b36c78/ac363/images/construction-m.webp"></source>
                <source media="(min-width: 601px)" srcSet="https://d33wubrfki0l68.cloudfront.net/90112a64c159404c3a6aa6f128af4f902e4fa7d6/4535e/images/construction.jpg"></source>
                <img loading="lazy" decoding="async" src="https://d33wubrfki0l68.cloudfront.net/90112a64c159404c3a6aa6f128af4f902e4fa7d6/4535e/images/construction.jpg" alt="house" width="611" height="861"></img>
             </picture>
    </section>

    <section id="services-table">
        <h2 className="title">Services Offered</h2>
        <div className="services-container">
            <div className="services-table-item">
                <div className="personaltraining-image">
                    <Link href="/services/HedgeMaintenance"><Image src={Hedge} layout="fill" objectFit="cover"></Image></Link>
                </div>
                    <Link href="/services/HedgeMaintenance"><h3 className="services-title">Hedge Maintenance</h3></Link>
                   
            </div>
            <div className="services-table-item">
                <div className="personaltraining-image">
                    <Link href="/services/PowerRaking"><Image src={PowerRaking} layout="fill" objectFit="cover"></Image></Link>
                </div>
                    <Link href="/services/PowerRaking"><h3 className="services-title">Power Raking</h3></Link>
                    
            </div>

            <div className="services-table-item">
                <div className="personaltraining-image">
                    <Link href="/services/FallSpringCleanup"><Image src={Spring} layout="fill" objectFit="cover"></Image></Link>
                </div>
                <Link href="/services/FallSpringCleanup"><h3 className="services-title">Fall/Spring Cleanup</h3></Link>
                
            </div>

            <div className="services-table-item">
                <div className="personaltraining-image">
                    <Link href="/services/Aeration"><Image src={Aeration} layout="fill" objectFit="cover"></Image></Link>
                </div>
                <Link href="/services/Aeration"><h3 className="services-title">Aeration</h3></Link>
                
            </div>

            <div className="services-table-item">
                <div className="personaltraining-image">
                    <Link href="/services/Pruning"><Image src={Pruning} layout="fill" objectFit="cover"></Image></Link>
                </div>
                    <Link href="/services/Pruning"><h3 className="services-title">Pruning</h3></Link>
                   
            </div>
            <div className="services-table-item">
                <div className="personaltraining-image">
                    <Link href="/services/PressureWashing"><Image src={PressureWasher} layout="fill" objectFit="cover"></Image></Link>
                </div>
                    <Link href="/services/PressureWashing"><h3 className="services-title">Pressure Washing</h3></Link>
                    
            </div>

            <div className="services-table-item">
                <div className="personaltraining-image">
                    <Link href="/services/SnowRemoval"><Image src={Snow} layout="fill" objectFit="cover"></Image></Link>
                </div>
                <Link href="/services/SnowRemoval"><h3 className="services-title">Snow Removal and Ice Control</h3></Link>
                
            </div>

            <div className="services-table-item">
                <div className="personaltraining-image">
                    <Link href="/services/JunkGreenWasteRemoval"><Image src={Junk} layout="fill" objectFit="cover"></Image></Link>
                </div>
                <Link href="/services/JunkGreenWasteRemoval"><h3 className="services-title">Junk and Green Waste Removal</h3></Link>            
            </div>
        </div>
    </section>

    <div id="stats">
        <ul className="cs-stat-group">
            <li className="cs-item">
                <picture className="cs-picture" aria-hidden="true">
                    <FontAwesomeIcon class="cs-icon" icon={faStar} style={{color: "#015e41", height: "2.5rem"}} />
                    {/* <Image class="cs-icon" src="https://d33wubrfki0l68.cloudfront.net/7291578fd665838270eef92ea1d57a612b4f2d2a/35d61/assets/images/5-star.svg" alt="icon" width="40" height="35" loading="lazy" decoding="async" /> */}
                </picture>
                <div className="cs-flex-group">
                    <span className="cs-number">5/5</span>
                    <span className="cs-stat">Google Rating</span>
                </div>
            </li>
            <li className="cs-item">
                <picture className="cs-picture" aria-hidden="true">
                    <FontAwesomeIcon className="cs-icon" icon={faScrewdriverWrench} style={{color: "#015e41", height: "2.5rem"}} />
                    {/* <Image class="cs-icon" src="https://d33wubrfki0l68.cloudfront.net/d8becff8cf5b696aa674a6d884a5fb3395d5f33b/5f680/assets/images/tool-box.svg" alt="icon" width="40" height="40" loading="lazy" decoding="async" /> */}
                </picture>
                <div className="cs-flex-group">
                    <span className="cs-number">100's</span>
                    <span className="cs-stat">Complete Projects</span>
                </div>
            </li>
            <li className="cs-item">
                <picture className="cs-picture" aria-hidden="true">
                <FontAwesomeIcon className="cs-icon" icon={faCircleCheck} style={{color: "#015e41", height: "2.5rem"}} />
                    {/* <Image class="cs-icon" src="https://d33wubrfki0l68.cloudfront.net/d654c645ae514f853a14b6214137a98ecd0509a0/14d3f/assets/images/check-gold.svg" alt="icon" width="40" height="40" loading="lazy" decoding="async" /> */}
                </picture>
                <div className="cs-flex-group">
                    <span className="cs-number">100%</span>
                    <span className="cs-stat">Satisfaction</span>
                </div>
            </li>
        </ul>
    </div>

    <section id="cta">
            <div className="container">
                <h2 className="title">Get it done with us today</h2>
                <p>
                    With years of experience, our team is here to provide you with exceptional customer service and top-of-the-line results, every single time.
                </p>
                <Link href="/contact"><a className="cta-button-solid">Get a Free Estimate Now</a></Link>
            </div>
            <picture>
                <source media="(max-width: 600px)" srcSet="https://d33wubrfki0l68.cloudfront.net/a73be843f2d49486e5cbb5739863be86633ff240/9b240/images/cabinets2-m.webp"></source>
                <source media="(min-width: 601px)" srcSet="https://d33wubrfki0l68.cloudfront.net/c41665bf721aba3fae2cbac32b7f418f0d197fb9/36c1a/images/cabinets2.jpg"></source>
                <div className="cta-image">
                    <Image aria-hidden="true" loading="lazy" decoding="async" src={Cta} alt="kitchen cabinets" width="1920" height="1280"></Image>
                </div>
            </picture>
    </section>
    </>
  );
}