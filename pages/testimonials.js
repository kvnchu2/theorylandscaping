import React from "react";
import Image from "next/image";
import Profile from "../public/images/profile.svg";
import Stars from "../public/images/stars.svg";

export default function Testimonials() {

  return (
  <>
    <section id="int-hero">
        <h1 id="home-h">Testimonials</h1>
    </section>

    <section id="reviews">
    <div class="container">
        <div class="review">
            <picture className="profile">
                <Image loading="lazy" decoding="async" src={Profile} alt="" width="99" height="99" />
            </picture>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed recusandae rerum unde similique ratione sapiente necessitatibus natus mollitia nam iusto.
            </p>
            <div class="star-group">
            <span class="name">B Miller<span class="desc">Homeowner</span></span>
                <picture>
                <Image aria-hidden="true" loading="lazy" decoding="async" src={Stars} alt="stars" width="91" height="15" />
                </picture>
            </div>
        </div>
        <div class="review">
            <picture>
                <img class="profile" loading="lazy" decoding="async" src="/assets/images/profile.svg" alt="" width="99" height="99"></img>
                </picture>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed recusandae rerum unde similique ratione sapiente necessitatibus natus mollitia nam iusto.
                </p>
                <div class="star-group">
                <span class="name">Vincent M.<span class="desc">Homeowner</span></span>
                    <picture>
                    <img aria-hidden="true" loading="lazy" decoding="async" src="/assets/images/stars.svg" alt="stars" width="91" height="15"></img>
                    </picture>
                </div>
        </div>
        <div class="review">
            <picture>
                <img class="profile" loading="lazy" decoding="async" src="/assets/images/profile.svg" alt="" width="99" height="99"></img>
                </picture>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed recusandae rerum unde similique ratione sapiente necessitatibus natus mollitia nam iusto.
                </p>
                <div class="star-group">
                    <span class="name">Alex L.<span class="desc">Homeowner</span></span>
                    <picture>
                    <img aria-hidden="true" loading="lazy" decoding="async" src="/assets/images/stars.svg" alt="stars" width="91" height="15"></img>
                    </picture>
                </div>
        </div>
        <div class="review">
            <picture>
                <img class="profile" loading="lazy" decoding="async" src="/assets/images/profile-woman.svg" alt="" width="99" height="99"></img>
                </picture>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed recusandae rerum unde similique ratione sapiente necessitatibus natus mollitia nam iusto.
                </p>
                <div class="star-group">
                <span class="name">Arrieana M.<span class="desc">Homeowner</span></span>
                    <picture>
                    <img aria-hidden="true" loading="lazy" decoding="async" src="/assets/images/stars.svg" alt="stars" width="91" height="15"></img>
                    </picture>
                </div>
        </div>
        <div class="review">
            <picture>
                <img class="profile" loading="lazy" decoding="async" src="/assets/images/profile.svg" alt="" width="99" height="99"></img>
                </picture>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed recusandae rerum unde similique ratione sapiente necessitatibus natus mollitia nam iusto.
                </p>
                <div class="star-group">
                <span class="name">Leo N.<span class="desc">Homeowner</span></span>
                    <picture>
                    <img aria-hidden="true" loading="lazy" decoding="async" src="/assets/images/stars.svg" alt="stars" width="91" height="15"></img>
                    </picture>
                </div>
        </div>
        <div class="review">
            <picture>
                <img class="profile" loading="lazy" decoding="async" src="/assets/images/profile.svg" alt="" width="99" height="99"></img>
                </picture>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed recusandae rerum unde similique ratione sapiente necessitatibus natus mollitia nam iusto.
                </p>
                <div class="star-group">
                    <span class="name">Brian A.<span class="desc">Homeowner</span></span>
                    <picture>
                    <img aria-hidden="true" loading="lazy" decoding="async" src="/assets/images/stars.svg" alt="stars" width="91" height="15"></img>
                    </picture>
                </div>
        </div>
    </div>
</section>
    </>
  )
}