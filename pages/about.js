import React from "react";
import Image from "next/image";
import {getAllAbouts} from "../lib/contentful";

const About = ({abouts}) => {
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">About Company</h1>
    </section>
    {/* <section id="about-content" className="section">
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
    </section> */}
    <section id="staff">
      <span className="topper">Our Team</span>
      <h2>Meet Our Staff</h2>
      <p className="main-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, eum voluptates. Provident nesciunt aspernatur iusto ea? Ipsam eos sed culpa.
      </p>
      <div className="container">
                {abouts.map((about) => (
                <div className="member">
                    <div className="image">
                        <Image decoding="async" src={about.image} alt="" width="21" height="21" />
                    </div>
                    <div className="content">
                        <div className="desc">
                        
                            <h3>{about.name}</h3>
                            <span className="title">Owner/Operator</span></div>
                        <p>
                            {about.description}
                        </p>
                    </div>
                </div>
                ))}
          <div className="member">
              <div className="image">
                  <img decoding="async" src="/images/about-image.jpg" alt="" width="" height="" />
              </div>
              <div className="content">
                  <div className="desc">
                  
                      <h3>Brad Pitt</h3>
                      <span className="title">Owner/Operator</span></div>
                  <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eos asperiores, magni atque, a, necessitatibus consectetur molestiae rerum quaerat cum fugiat soluta quam voluptatum. Ut, totam debitis? Quisquam nesciunt tenetur officiis pariatur? Nostrum aspernatur officiis quos iusto nisi assumenda fugiat.
                  </p>
              </div>
          </div>
          <div className="member">
              <div className="image">
                  <img decoding="async" src="/images/about-image.jpg" alt="" width="" height=""></img>
              </div>
              <div className="content">
                  <div className="desc">
                      <h3>Gus Chuggins</h3>
                      <span className="title">Office Administrator/LVN</span>
                  </div>
                  <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eos asperiores, magni atque, a, necessitatibus consectetur molestiae rerum quaerat cum fugiat soluta quam voluptatum. Ut, totam debitis? Quisquam nesciunt tenetur officiis pariatur? Nostrum aspernatur officiis quos iusto nisi assumenda fugiat. 
                  </p>
              </div>
          </div>
          <div className="member">
              <div className="image">
                  <img loading="lazy" decoding="async" src="/images/about-image.jpg" alt="" width="" height=""></img>
              </div>
              <div className="content">
                  <div className="desc">
                      <h3>Rip Magnificant</h3>
                      <span className="title">PMHNP-BC</span>
                  </div>
                  <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eos asperiores, magni atque, a, necessitatibus consectetur molestiae rerum quaerat cum fugiat soluta quam voluptatum. Ut, totam debitis? Quisquam nesciunt tenetur officiis pariatur? Nostrum aspernatur officiis quos iusto nisi assumenda fugiat.
                  </p>
              </div>
          </div>
          <div className="member">
              <div className="image">
                  <img loading="lazy" decoding="async" src="/images/about-image.jpg" alt="" width="" height=""></img>
              </div>
              <div className="content">
                  <div className="desc">
                      <h3>Armie Sledgehammer</h3>
                      <span className="title">PMHNP-BC</span>
                  </div>
                  <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eos asperiores, magni atque, a, necessitatibus consectetur molestiae rerum quaerat cum fugiat soluta quam voluptatum. Ut, totam debitis? Quisquam nesciunt tenetur officiis pariatur? Nostrum aspernatur officiis quos iusto nisi assumenda fugiat.
                  </p>
              </div>
          </div>
      </div>
    </section>
  </>
  );
};

export default About;


export async function getStaticProps() {
    const abouts = await getAllAbouts();
    return {
      props: {
        abouts,
      },
    };
  }