import React from "react";
import Image from "next/image";
import {getAllAbouts} from "../lib/contentful";

const About = ({abouts}) => {
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">About Us</h1>
    </section>
    <section id="staff">
      {/* <span className="topper">Our Team</span>
      <h2>Meet The Founder</h2>
      <p className="main-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, eum voluptates. Provident nesciunt aspernatur iusto ea? Ipsam eos sed culpa.
      </p> */}
      <div className="container">
                {abouts.map((about) => (
                <div className="member" key={about.name}>
                    <div className="image">
                        <div className="image-content">
                        <Image decoding="async" src={about.image.url} alt="kevin" layout="fill" />
                        </div>
                    </div>
                    <div className="content">
                        <div className="desc">
                            <h3>{about.name}</h3>
                            <span className="title">{about.profession}</span></div>
                        <p>
                            {about.description}
                        </p>
                    </div>
                </div>
                ))}
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