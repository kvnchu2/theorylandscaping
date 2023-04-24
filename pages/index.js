import Navbar from "../components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from '../public/images/phone.svg';
import phoneDark from '../public/images/phone-dark.svg';
import Car from '../public/images/car-svgrepo-com.svg';
import Calendar from '../public/images/calendar-svgrepo-com.svg';
import Money from '../public/images/money-svgrepo-com.svg';
import Landscaping from '../public/images/landscaping.png';
import Lawnmower from '../public/images/lawnmower.png';
import Gardening from '../public/images/gardening.png';
import Hedge from '../public/images/hedge.jpg';
import PowerRaking from '../public/images/powerraking.jpg';
import Spring from '../public/images/spring.jpg';
import Aeration from '../public/images/aeration.jpg';
import Pruning from '../public/images/pruning.jpg';
import PressureWasher from '../public/images/pressure-washer.jpg';
import Fall from '../public/images/fall.jpg';
import Snow from '../public/images/snow.jpg';
import Junk from '../public/images/junk.jpg';


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

    <section id="services" className="services">
        
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
                 <a className="button-solid" href="/contact">Contact Us</a>
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
            
        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <div className="card-image">    
                    <Image loading="lazy" decoding="async" src={Hedge} alt="" width="553" height="383"></Image>
                </div>
            </picture>
                <h3>Hedge Maintenance Services</h3>
                <p>
                Hedges grow beautifully and offer plenty of privacy! Whether you’re designing a new yard for your house or you’re looking to refresh your current look, hedges are a beautiful accent that will surely raise the aesthetic and property value of your home. But it can also be challenging to maintain and care for them.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <div className="card-image">
                    <Image loading="lazy" decoding="async" src={PowerRaking} alt="" width="553" height="383"></Image>
                </div>
                </picture>
                <h3>Power Raking</h3>
                <p>
                Keep your property in tip-top shape with one of the most recommended solutions to help your lawn fight the various problems that can arise, like the destructive chafer beetle or thick lawn-choking moss, is a power rake. Power raking is an essential step that will help the long term health of your lawn. Read on to find out if a power rake is the right solution for you!
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                
                <div className="card-image">
                    <Image loading="lazy" decoding="async" src={Spring} alt="" width="553" height="383"></Image>
                </div>
                </picture>
                <h3>Spring Clean Up</h3>
                <p>
                Keep your property in tip-top shape with our spring clean up services. Our team does it all, and is ready to provide complete attention to your every need. You can count on us to make sure you’re satisfied with the results, and to get your garden ready for the season.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <div className="card-image">
                    <Image loading="lazy" decoding="async" src={Aeration} alt="" width="553" height="383"></Image>
                </div>
                </picture>
                <h3>Aeration</h3>
                <p>
                If you notice your lawn is pooling in certain areas, as is common in B.C , this is a clear sign that your lawn wants an aeration. When the soil is very compact, water can’t penetrate it and this is what causes the pooling. When you aerate , it loosens up the compacted soil and will eliminate the pooling over time. Aside from this, you should aerate your lawn simply because it gives optimal access to nutrients, air and water for your turf’s roots.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <div className="card-image">
                    <Image loading="lazy" decoding="async" src={Pruning} alt="" width="553" height="383"></Image>
                </div>
                </picture>
                <h3>Pruning</h3>
                <p>
                As with most landscaping services in B.C, the obvious reasons for proper garden care is the proper health of your plants, and to elevate the look of your gardens and your property. Overgrown plants, and trees can become an eye sore as they grow into, and over, each other.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <div className="card-image">
                    <Image loading="lazy" decoding="async" src={PressureWasher} alt="" width="553" height="383"></Image>
                </div>
                </picture>
                <h3>Pressure Washing Services</h3>
                <p>
                Power washing, or pressure washing, is something that we would recommend doing for your home at least once a year. Without frequent pressure washing, the buildup of dirt, dust or grime can become too much for a single pressure wash, or to clean at all. So to prevent non-removable grime, you should make this a part of your home care checklist.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <div className="card-image">
                    <Image loading="lazy" decoding="async" src={Fall} alt="" width="553" height="383"></Image>
                </div>
                </picture>
                <h3>Fall Cleanup</h3>
                <p>
                By now, the weather is getting chillier, the season’s colors are showing, and you’re stuck wondering what you are supposed to do about your yard. Have no fear because Theory Landscaping has you covered. A fall cleanup is a great way to ensure the long term health of your garden and lawn.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <div className="card-image">
                    <Image loading="lazy" decoding="async" src={Snow} alt="" width="553" height="383"></Image>
                </div>
                </picture>
                <h3>Snow Removal and Ice Control</h3>
                <p>
                We specialize in seasonal services, at Theory Landscaping here in B.C we will get snow at some point during the winter let us help you take care of it. We do all types of properties from residential to strata and commercial property.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <div className="card-image">
                    <Image loading="lazy" decoding="async" src={Junk} alt="" width="553" height="383"></Image>
                </div>
                </picture>
                <h3>Junk and Green Waste Removal</h3>
                <p>
                Do you have some clutter around your property you need cleaned up? Do you have an overwhelming amount of leaves? At Theory Landscaping we do various clean up jobs from big to small to new construction and green waste removal.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        <div class="card">
            <picture class="right">
                <source media="(max-width: 600px)" srcset="https://d33wubrfki0l68.cloudfront.net/2a395f871d7c40a13a2c65da126baac73b1dc3d4/1e722/images/ex-services2-m.jpg"></source>
                <source media="(min-width: 601px)" srcset="https://d33wubrfki0l68.cloudfront.net/caf02f0e4a27738c81a32176cd29f0511513a548/b76c9/images/ex-services2.jpg"></source>
                <div className="card-image">
                <Image loading="lazy" decoding="async" src={Junk} alt="" width="553" height="383"></Image>
                </div>
                </picture>
                <h3>Exterior Work &amp; Repairs</h3>
                <p>
                The exterior of your property is the first thing that everyone sees. It projects your image to other people; it's what tells them if you take care of your home or not. The Copper Top contractors are here to build you a beautiful exterior environment for your home, along with any repairs needed. With a full range of exterior work and repairs, we can help to make sure that water doesn't leak into your home along with other problems that may arise.
            </p>
            <a href="/contact">Call Now →</a>
        </div>

        </div>
    </section>

    <section id="cta">
            <div class="container">
                <h2 class="title">Get it done with us today</h2>
                <p>
                    With years of experience, our team is here to provide you with exceptional customer service and top-of-the-line results, every single time.
                </p>
                <a class="cta-button-solid" href="/contact">Get a Free Estimate Now</a>
            </div>
            <picture>
                <source media="(max-width: 600px)" srcSet="https://d33wubrfki0l68.cloudfront.net/a73be843f2d49486e5cbb5739863be86633ff240/9b240/images/cabinets2-m.webp"></source>
                <source media="(min-width: 601px)" srcSet="https://d33wubrfki0l68.cloudfront.net/c41665bf721aba3fae2cbac32b7f418f0d197fb9/36c1a/images/cabinets2.jpg"></source>
                <img aria-hidden="true" loading="lazy" decoding="async" src="https://d33wubrfki0l68.cloudfront.net/c41665bf721aba3fae2cbac32b7f418f0d197fb9/36c1a/images/cabinets2.jpg" alt="kitchen cabinets" width="1920" height="1280"></img>
            </picture>
    </section>
    </>
  );
}