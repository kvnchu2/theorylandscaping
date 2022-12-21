import Navbar from "../components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from '../public/images/phone.svg';
import phoneDark from '../public/images/phone-dark.svg';
import ryanCaselli from '../public/images/ryan-caselli.png';
import Service1 from '../public/images/service11.svg';
import Service2 from '../public/images/service22.svg';
import Service3 from '../public/images/service33.svg';
import Car from '../public/images/car-svgrepo-com.svg';
import Calendar from '../public/images/calendar-svgrepo-com.svg';
import Money from '../public/images/money-svgrepo-com.svg';
import Fitness from '../public/images/fitness.jpg';


export default function Home() {
  return (
    <>
      <section id="hero">
          <div className="hero-content">
              <div className="heroText">
                  <h1 id="home-h">Empowering you through movement</h1>
                  <p>
                      Offering 1-on-1 exercise programs designed to give you a head start on recovery from injury or pain. Try Kinesiology training for performance and health.
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
                              <span className="number">(555) 213-9120</span>
                          </div>
                      </a>
                  </div>
              </div>
              {/* <div className="business-casual">
                <Image decoding="async" src={ryanCaselli} alt="" width="" height=""/>
              </div> */}
          </div>
      </section>

    {/* <section id="services" className="section">
        <div className="service">
            <h2>This is a main<span> service you do</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio dui, fermentum id augue.
            </p>
            <a href="/contact.html" className="button-solid">Get in Touch</a>
        </div>
        <div className="service">
            <h2>This is THE main<span> service you do</span></h2>
            <p>
                Notice how this one is bigger and darker, this is your main service you provide.
            </p>
            <a href="/contact.html" className="button-solid">Get in Touch</a>
        </div>
        <div className="service">
            <h2>This is a main<span> service you do</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio dui, fermentum id augue .
            </p>
            <a href="/contact.html" className="button-solid">Get in Touch</a>
        </div>
    </section> */}


    <section id="services" class="services">
        
        <div class="card">
            <picture className="picture">
                <Image src={Car} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Mobile</h2>
            <p>
                No need to visit a clinic! Sessions take place at your home, community center gym, or pool.
            </p>
        </div>
        <div class="card">
            <picture>
                <Image aria-hidden="true" decoding="async" src={Calendar} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Flexible</h2>
            <p>
                Scheduling is convenient to accommodate your availability.
            </p>
        </div>
        <div class="card">
            <picture>
                <Image aria-hidden="true" decoding="async" src={Money} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Direct Billing</h2>
            <p>
            Insurance-covered services billed directly to ICBC, WSBC, MSP and major insurance providers.
            </p>
        </div>
    </section>
    <section id="about-content-home" className="section">
      <div className="container">
        <div className="image">
          <Image className="fitness" decoding="async" src={Fitness} alt="" width="" height="" />
        </div>
        <div className="content">
          <span className="topper">Who We Are</span>
          <h2>Making your health a priority. Together.</h2>
          <div aria-hidden="true" className="decoration">
            <img src="/images/leaf.svg" alt=""></img>
            <div className="line"></div>
          </div>
          <p>
          Your active rehab plan is an important step in your path to recovery and ensuring your long term health and fitness. That's why we're here to support you through every step of that journey.

Working with you, I will build a plan that will address rehabilitation exercise, basic strength training, stress management, lifestyle habits, and more.
          </p>
        </div>
      </div>
    </section>

    <section id="reviews-home">
        <div class="cs-container">
            <span class="cs-topper">Our Reviews</span>
            <h2 class="cs-title">Words From Our Clients</h2>
            <p class="cs-text">
                
            </p>
            <ul class="cs-card-group">
               
                <li class="cs-item">
                    <img class="cs-item-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile5.png" alt="profile picture" width="80" height="80"></img>
                    <p class="cs-item-p">
                        Dictum dolor, nullam morbi sem in auctor proin. Consequat dolor habitasse nam sed tempor. Viverra magna pharetra rhoncus, nec sed ullamcorper lectus et. Auctor velit diam fermentum consequat. Feugiat viverra massa urna, volutpat orci imperdiet eget eget.
                    </p>
                    <span class="cs-reviewer">
                        Jon Doe
                        <span class="cs-desc">Homeowner</span>
                    </span>
                    <img class="cs-item-stars" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/stars-yellow.svg" alt="stars" width="96" height="16"></img>
                </li>
                
                <li class="cs-item">
                    <img class="cs-item-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile-4.png" alt="profile picture" width="80" height="80"></img>
                    <p class="cs-item-p">
                        Dictum dolor, nullam morbi sem in auctor proin. Consequat dolor habitasse nam sed tempor. Viverra magna pharetra rhoncus, nec sed ullamcorper lectus et. Auctor velit diam fermentum consequat. Feugiat viverra massa urna, volutpat orci imperdiet eget eget.
                    </p>
                    <span class="cs-reviewer">
                        Jane Doe
                        <span class="cs-desc">Homeowner</span>
                    </span>
                    <img class="cs-item-stars" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/stars-yellow.svg" alt="stars" width="96" height="16"></img>
                </li>
            </ul>
            <a aria-label="read more reviews" href="/reviews" class="button-solid">Read More</a>
        </div>
    </section>
    
    </>
  );
}
