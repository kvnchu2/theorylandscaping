import React from "react";
import Image from "next/image";
import Link from "next/link";
import ExerciseGear from '../../public/images/exercise-gear.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Cta from '../../public/images/cta.jpg';

const FallSpringCleanup = () => {
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">Fall and Spring Cleanup</h1>
    </section>

    <section id="services" className="sidebyside">
            <div className="left">
                <h2 className="title">Fall and Spring Cleanup</h2>
                 <p>
                 Keep your property in tip-top shape with our spring clean up services. Our team does it all, and is ready to provide complete attention to your every need. You can count on us to make sure you’re satisfied with the results, and to get your garden ready for the season.
                 </p>
                 <p>
                 A fall cleanup is also a great way to ensure the long term health of your garden and lawn. By now, the weather is getting chillier, the season’s colors are showing, and you’re stuck wondering what you are supposed to do about your yard. Have no fear because Theory Landscaping has you covered.
                 </p>
                 <Link href="/contact"><a className="button-solid">Contact Us</a></Link>
            </div>
            <picture className="right">
                <source media="(max-width: 600px)" srcSet="https://d33wubrfki0l68.cloudfront.net/d0ffbfdeb07c04903e25b30344e05b3d12b36c78/ac363/images/construction-m.webp"></source>
                <source media="(min-width: 601px)" srcSet="https://d33wubrfki0l68.cloudfront.net/90112a64c159404c3a6aa6f128af4f902e4fa7d6/4535e/images/construction.jpg"></source>
                <img loading="lazy" decoding="async" src="https://d33wubrfki0l68.cloudfront.net/90112a64c159404c3a6aa6f128af4f902e4fa7d6/4535e/images/construction.jpg" alt="house" width="611" height="861"></img>
             </picture>
    </section>

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
};

export default FallSpringCleanup;