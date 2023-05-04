import React from "react";
import Image from "next/image";
import Link from "next/link";
import Snow from "../../public/images/snow.jpg";
import Cta from '../../public/images/cta.jpg';

const SnowRemoval = () => {
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">Snow Removal and Ice Control</h1>
    </section>

    <section id="services" className="sidebyside">
            <div className="left">
                <h2 className="title">Snow Removal and Ice Control</h2>
                 <p>
                 We specialize in seasonal services, at Theory Landscaping here in B.C we will get snow at some point during the winter let us help you take care of it. We do all types of properties from residential to strata and commercial property.
                 </p>
                 <Link href="/contact"><a className="button-solid">Contact Us</a></Link>
            </div>
            <picture className="right">
                <source media="(max-width: 600px)" srcSet="https://d33wubrfki0l68.cloudfront.net/d0ffbfdeb07c04903e25b30344e05b3d12b36c78/ac363/images/construction-m.webp"></source>
                <source media="(min-width: 601px)" srcSet="https://d33wubrfki0l68.cloudfront.net/90112a64c159404c3a6aa6f128af4f902e4fa7d6/4535e/images/construction.jpg"></source>
                <div className="services-image">
                  <Image loading="lazy" decoding="async" src={Snow} alt="house" width="611" height="861"></Image>
                </div>
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

export default SnowRemoval;