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
                I was very satisfied with this company’s work. The staff was respectful and easy to communicate with. Their work was done professionally and efficiently. Would definitely work with them again.
            </p>
            <div className="star-group">
            <span className="name">Khushi Sangha<span className="desc">Customer</span></span>
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
                The company is very punctual and did an excellent job.
                </p>
                <div className="star-group">
                <span className="name">Maanvir Brar<span className="desc">Customer</span></span>
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
                Awesome people and awesome work! Grass is greener than ever!!
                </p>
                <div className="star-group">
                    <span className="name">Dame Dot<span className="desc">Customer</span></span>
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
                I have been using these guys for years, highly recommend.
                </p>
                <div className="star-group">
                <span className="name">Man Nahal<span className="desc">Customer</span></span>
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
                Did a great job and was very respectful
                </p>
                <div className="star-group">
                <span className="name">Sartaz Dhaliwal<span className="desc">Customer</span></span>
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
                
                </p>
                <div className="star-group">
                    <span className="name">Riya Gill<span className="desc">Customer</span></span>
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