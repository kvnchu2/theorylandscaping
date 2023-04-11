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
import ProfileWoman from '../public/images/profile-woman.svg';
import Profile from '../public/images/profile.svg';
import Leaf from '../public/images/leaf.svg';
import PersonalTraining from '../public/images/personal-training.jpg';
import Acupuncture from '../public/images/acupuncture.jpg';
import ElderCare from '../public/images/elder-care.jpg';
import KinesioTaping from '../public/images/kinesio-taping.jpg';
import Physiotherapy from '../public/images/physiotherapy.jpg';
import Cupping from '../public/images/cupping.jpg';
import Online from '../public/images/online.jpg';





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
                              <span className="number">(236) 512-5182</span>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
      </section>

    <section id="services" className="services">
        
        <div className="card">
            <picture className="picture">
                <Image src={Car} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Mobile</h2>
            <p>
                No need to visit a clinic! Sessions take place at your home, community center gym, or pool.
            </p>
        </div>
        <div className="card">
            <picture>
                <Image aria-hidden="true" decoding="async" src={Calendar} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Flexible</h2>
            <p>
                Scheduling is convenient to accommodate your availability.
            </p>
        </div>
        <div className="card">
            <picture>
                <Image aria-hidden="true" decoding="async" src={Money} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Direct Billing</h2>
            <p>
            Insurance-covered services billed directly to ICBC and major insurance providers.
            </p>
        </div>
    </section>

    <section id="about" className="sidebyside">
            <div className="left">
                <h2 className="title">Whidbey Island Home Construction Specialists</h2>
                 <p>
                    A home is the most significant investment you can make, providing a place of solace and comfort. At Coppertop Construction, we know just how important your home is to you, and it's our mission to ensure that everything we do complements your personal taste and needs.
                 </p>
                 <p>
                    We offer a range of services for all your home construction needs, including excavating, grading, septic, and water system installation services. If you're looking for a complete home renovation for your kitchen, bathroom, or any other area of the house, we can help with that as well!
                 </p>
                 <a className="button-solid" href="/contact">Contact Us</a>
            </div>
            <picture className="right">
                <source media="(max-width: 600px)" srcSet="https://d33wubrfki0l68.cloudfront.net/d0ffbfdeb07c04903e25b30344e05b3d12b36c78/ac363/images/construction-m.webp"></source>
                <source media="(min-width: 601px)" srcSet="https://d33wubrfki0l68.cloudfront.net/90112a64c159404c3a6aa6f128af4f902e4fa7d6/4535e/images/construction.jpg"></source>
                <img loading="lazy" decoding="async" src="https://d33wubrfki0l68.cloudfront.net/90112a64c159404c3a6aa6f128af4f902e4fa7d6/4535e/images/construction.jpg" alt="house" width="611" height="861"></img>
             </picture>
    </section>

    <section id="services-table">
        <span className="cs-topper">Services Offered</span>
        <h2 className="cs-title">Ways I help improve your health and fitness</h2>
        <div className="services-container">
            
        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <img loading="lazy" decoding="async" src="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg" alt="" width="553" height="383"></img>
                </picture>
                <h3>Exterior Work &amp; Repairs</h3>
                <p>
                The exterior of your property is the first thing that everyone sees. It projects your image to other people; it's what tells them if you take care of your home or not. The Copper Top contractors are here to build you a beautiful exterior environment for your home, along with any repairs needed. With a full range of exterior work and repairs, we can help to make sure that water doesn't leak into your home along with other problems that may arise.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <img loading="lazy" decoding="async" src="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg" alt="" width="553" height="383"></img>
                </picture>
                <h3>Exterior Work &amp; Repairs</h3>
                <p>
                The exterior of your property is the first thing that everyone sees. It projects your image to other people; it's what tells them if you take care of your home or not. The Copper Top contractors are here to build you a beautiful exterior environment for your home, along with any repairs needed. With a full range of exterior work and repairs, we can help to make sure that water doesn't leak into your home along with other problems that may arise.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <img loading="lazy" decoding="async" src="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg" alt="" width="553" height="383"></img>
                </picture>
                <h3>Exterior Work &amp; Repairs</h3>
                <p>
                The exterior of your property is the first thing that everyone sees. It projects your image to other people; it's what tells them if you take care of your home or not. The Copper Top contractors are here to build you a beautiful exterior environment for your home, along with any repairs needed. With a full range of exterior work and repairs, we can help to make sure that water doesn't leak into your home along with other problems that may arise.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <img loading="lazy" decoding="async" src="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg" alt="" width="553" height="383"></img>
                </picture>
                <h3>Exterior Work &amp; Repairs</h3>
                <p>
                The exterior of your property is the first thing that everyone sees. It projects your image to other people; it's what tells them if you take care of your home or not. The Copper Top contractors are here to build you a beautiful exterior environment for your home, along with any repairs needed. With a full range of exterior work and repairs, we can help to make sure that water doesn't leak into your home along with other problems that may arise.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <img loading="lazy" decoding="async" src="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg" alt="" width="553" height="383"></img>
                </picture>
                <h3>Exterior Work &amp; Repairs</h3>
                <p>
                The exterior of your property is the first thing that everyone sees. It projects your image to other people; it's what tells them if you take care of your home or not. The Copper Top contractors are here to build you a beautiful exterior environment for your home, along with any repairs needed. With a full range of exterior work and repairs, we can help to make sure that water doesn't leak into your home along with other problems that may arise.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <img loading="lazy" decoding="async" src="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg" alt="" width="553" height="383"></img>
                </picture>
                <h3>Exterior Work &amp; Repairs</h3>
                <p>
                The exterior of your property is the first thing that everyone sees. It projects your image to other people; it's what tells them if you take care of your home or not. The Copper Top contractors are here to build you a beautiful exterior environment for your home, along with any repairs needed. With a full range of exterior work and repairs, we can help to make sure that water doesn't leak into your home along with other problems that may arise.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <img loading="lazy" decoding="async" src="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg" alt="" width="553" height="383"></img>
                </picture>
                <h3>Exterior Work &amp; Repairs</h3>
                <p>
                The exterior of your property is the first thing that everyone sees. It projects your image to other people; it's what tells them if you take care of your home or not. The Copper Top contractors are here to build you a beautiful exterior environment for your home, along with any repairs needed. With a full range of exterior work and repairs, we can help to make sure that water doesn't leak into your home along with other problems that may arise.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <img loading="lazy" decoding="async" src="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg" alt="" width="553" height="383"></img>
                </picture>
                <h3>Exterior Work &amp; Repairs</h3>
                <p>
                The exterior of your property is the first thing that everyone sees. It projects your image to other people; it's what tells them if you take care of your home or not. The Copper Top contractors are here to build you a beautiful exterior environment for your home, along with any repairs needed. With a full range of exterior work and repairs, we can help to make sure that water doesn't leak into your home along with other problems that may arise.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <img loading="lazy" decoding="async" src="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg" alt="" width="553" height="383"></img>
                </picture>
                <h3>Exterior Work &amp; Repairs</h3>
                <p>
                The exterior of your property is the first thing that everyone sees. It projects your image to other people; it's what tells them if you take care of your home or not. The Copper Top contractors are here to build you a beautiful exterior environment for your home, along with any repairs needed. With a full range of exterior work and repairs, we can help to make sure that water doesn't leak into your home along with other problems that may arise.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <img loading="lazy" decoding="async" src="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg" alt="" width="553" height="383"></img>
                </picture>
                <h3>Exterior Work &amp; Repairs</h3>
                <p>
                The exterior of your property is the first thing that everyone sees. It projects your image to other people; it's what tells them if you take care of your home or not. The Copper Top contractors are here to build you a beautiful exterior environment for your home, along with any repairs needed. With a full range of exterior work and repairs, we can help to make sure that water doesn't leak into your home along with other problems that may arise.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        </div>
    </section>

    <section id="reviews-home">
        <div className="cs-container">
            <span className="cs-topper">Our Reviews</span>
            <h2 className="cs-title">Words From Our Clients</h2>
            <p className="cs-text">
                
            </p>
            <ul className="cs-card-group">
                
                <li className="cs-item">
                    <div className="cs-item-img">
                    <Image className="cs-item-img" aria-hidden="true" loading="lazy" decoding="async" src={ProfileWoman} alt="profile picture" width="80" height="80"/>
                    </div>
                    
                    <p className="cs-item-p">
                    I found Kevin to be an excellent teacher.  He was consistently supportive and encouraging. He recognized the difficulty that older persons have in establishing a new behaviour pattern!
                    </p>
                    <span className="cs-reviewer">
                        Dr. Carol Herbert
                        <span className="cs-desc">Family Physician</span>
                    </span>
                    <div className="cs-item-stars">
                        <Image aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/stars-yellow.svg" alt="stars" width="96" height="16" />
                    </div>
                </li>

                <li className="cs-item">
                    <div className="cs-item-img">
                        <Image className="cs-item-img" aria-hidden="true" loading="lazy" decoding="async" src={Profile} alt="profile picture" width="80" height="80"/>
                    </div>
                    <p className="cs-item-p">
                        Coming soon!
                    </p>
                    <span className="cs-reviewer">
                        
                        <span className="cs-desc"> </span>
                    </span>
                    <div className="cs-item-stars">
                        <Image aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/stars-yellow.svg" alt="stars" width="96" height="16"/>
                    </div>
                </li>
            </ul>
            <a aria-label="read more reviews" href="/reviews" className="button-solid">Read More</a>
        </div>
    </section>
    
    </>
  );
}