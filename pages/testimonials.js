import React from "react";
import Image from "next/image";
import Profile from "../public/images/profile.svg";
import Stars from "../public/images/stars.svg";
import ProfileWoman from "../public/images/profile-woman.svg";

export default function Testimonials() {

  return (
  <>
    <section id="int-hero">
        <h1 id="home-h">Testimonials</h1>
    </section>

    <section id="reviews">
    <div className="container">
        <div className="review">
            <picture className="profile">
                <Image loading="lazy" decoding="async" src={Profile} alt="" width="99" height="99" />
            </picture>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed recusandae rerum unde similique ratione sapiente necessitatibus natus mollitia nam iusto.
            </p>
            <div className="star-group">
            <span className="name">B Miller<span className="desc">Homeowner</span></span>
                <picture>
                <Image aria-hidden="true" loading="lazy" decoding="async" src={Stars} alt="stars" width="91" height="15" />
                </picture>
            </div>
        </div>
        <div className="review">
            <picture className="profile">
                <Image loading="lazy" decoding="async" src={Profile} alt="" width="99" height="99" />
                </picture>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed recusandae rerum unde similique ratione sapiente necessitatibus natus mollitia nam iusto.
                </p>
                <div className="star-group">
                <span className="name">Vincent M.<span className="desc">Homeowner</span></span>
                    <picture>
                    <Image aria-hidden="true" loading="lazy" decoding="async" src={Stars} alt="stars" width="91" height="15" />
                    </picture>
                </div>
        </div>
        <div className="review">
            <picture className="profile">
                <Image loading="lazy" decoding="async" src={Profile} alt="" width="99" height="99" />
                </picture>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed recusandae rerum unde similique ratione sapiente necessitatibus natus mollitia nam iusto.
                </p>
                <div className="star-group">
                    <span className="name">Alex L.<span className="desc">Homeowner</span></span>
                    <picture>
                    <Image aria-hidden="true" loading="lazy" decoding="async" src={Stars} alt="stars" width="91" height="15" />
                    </picture>
                </div>
        </div>
        <div className="review">
            <picture className="profile">
                <Image loading="lazy" decoding="async" src={ProfileWoman} alt="" width="99" height="99" />
                </picture>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed recusandae rerum unde similique ratione sapiente necessitatibus natus mollitia nam iusto.
                </p>
                <div className="star-group">
                <span className="name">Arrieana M.<span className="desc">Homeowner</span></span>
                    <picture>
                    <Image aria-hidden="true" loading="lazy" decoding="async" src={Stars} alt="stars" width="91" height="15" />
                    </picture>
                </div>
        </div>
        <div className="review">
            <picture className="profile">
                <Image loading="lazy" decoding="async" src={Profile} alt="" width="99" height="99" />
                </picture>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed recusandae rerum unde similique ratione sapiente necessitatibus natus mollitia nam iusto.
                </p>
                <div className="star-group">
                <span className="name">Leo N.<span className="desc">Homeowner</span></span>
                    <picture>
                    <Image aria-hidden="true" loading="lazy" decoding="async" src={Stars} alt="stars" width="91" height="15" />
                    </picture>
                </div>
        </div>
        <div className="review">
            <picture className="profile">
                <Image loading="lazy" decoding="async" src={Profile} alt="" width="99" height="99" />
                </picture>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed recusandae rerum unde similique ratione sapiente necessitatibus natus mollitia nam iusto.
                </p>
                <div className="star-group">
                    <span className="name">Brian A.<span className="desc">Homeowner</span></span>
                    <picture>
                    <Image aria-hidden="true" loading="lazy" decoding="async" src={Stars} alt="stars" width="91" height="15" />
                    </picture>
                </div>
        </div>
    </div>
</section>
    </>
  )
}