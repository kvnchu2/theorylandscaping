import Navbar from "../components/Navbar";
import React from "react";
import Image from "next/image";
import phone from '../public/images/phone.svg';
import phoneDark from '../public/images/phone-dark.svg';
import ryanCaselli from '../public/images/ryan-caselli.png';
import Service1 from '../public/images/service11.svg';
import Service2 from '../public/images/service22.svg';
import Service3 from '../public/images/service33.svg';



export default function Home() {
  return (
    <>
      <section id="hero">
          <div className="hero-content">
              <div className="heroText">
                  <h1 id="home-h">Main headline, put top keyword here </h1>
                  <p>
                      Expand on the keyword with more keywords and add a list of related services that you do and include the city, state of your service area.  
                  </p>
                  <div className="buttons">
                      <a className="button-solid" href="/about.html" >
                          About Us
                      </a>
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
                <Image src={Service1} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Service 1</h2>
            <p>
                Talk about the service with keywords people will be searching for it by. Keep it 1-2 sentences.
            </p>
        </div>
        <div class="card">
            <picture>
                <Image aria-hidden="true" decoding="async" src={Service2} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Service 2</h2>
            <p>
                Talk about the service with keywords people will be searching for it by. Keep it 1-2 sentences.
            </p>
        </div>
        <div class="card">
            <picture>
                <Image aria-hidden="true" decoding="async" src={Service3} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Service 3</h2>
            <p>
                Talk about the service with keywords people will be searching for it by. Keep it 1-2 sentences.
            </p>
        </div>
    </section>
    <section id="about-content" className="section">
      <div className="container">
        <div className="image">
          <img decoding="async" src="/images/about-image.jpg" alt="" width="" height=""></img>
        </div>
        <div className="content">
          <span className="topper">Who We Are</span>
          <h2>Headline that describes your business.  Make it two lines</h2>
          <div aria-hidden="true" className="decoration">
            <img src="/images/leaf.svg" alt=""></img>
            <div className="line"></div>
          </div>
          <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam laborum impedit assumenda ut doloremque, culpa dignissimos quaerat tenetur suscipit mollitia quod nobis cupiditate hic ducimus repudiandae ipsum similique iste voluptatem! Omnis velit dolorum fugit assumenda maiores tempora et molestias numquam. Dolorum, quas quisquam iure maiores a ipsam sequi quam laborum.   
          </p>
        </div>
      </div>
    </section>
    </>

  );
}
