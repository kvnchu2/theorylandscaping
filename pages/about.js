import React from "react";

const About = () => {
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">About Company</h1>
    </section>
    <section id="about-content" class="section">
      <div class="container">
        <div class="image">
          <img decoding="async" src="/images/about-image.jpg" alt="" width="" height=""></img>
        </div>
        <div class="content">
          <span class="topper">Who We Are</span>
          <h2>Headline that describes your business.  Make it two lines</h2>
          <div aria-hidden="true" class="decoration">
            <img src="/images/leaf.svg" alt=""></img>
            <div class="line"></div>
          </div>
          <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam laborum impedit assumenda ut doloremque, culpa dignissimos quaerat tenetur suscipit mollitia quod nobis cupiditate hic ducimus repudiandae ipsum similique iste voluptatem! Omnis velit dolorum fugit assumenda maiores tempora et molestias numquam. Dolorum, quas quisquam iure maiores a ipsam sequi quam laborum.   
          </p>
        </div>
      </div>
    </section>
    <section id="staff">
      <span class="topper">Our Team</span>
      <h2>Meet Our Staff</h2>
      <p class="main-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, eum voluptates. Provident nesciunt aspernatur iusto ea? Ipsam eos sed culpa.
      </p>
      <div class="container">
          <div class="member">
              <div class="image">
                  <img decoding="async" src="/images/about-image.jpg" alt="" width="" height=""></img>
              </div>
              <div class="content">
                  <div class="desc">
                      <h3>Brad Pitt</h3>
                      <span class="title">Owner/Operator</span></div>
                  <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eos asperiores, magni atque, a, necessitatibus consectetur molestiae rerum quaerat cum fugiat soluta quam voluptatum. Ut, totam debitis? Quisquam nesciunt tenetur officiis pariatur? Nostrum aspernatur officiis quos iusto nisi assumenda fugiat.
                  </p>
              </div>
          </div>
          <div class="member">
              <div class="image">
                  <img decoding="async" src="/images/about-image.jpg" alt="" width="" height=""></img>
              </div>
              <div class="content">
                  <div class="desc">
                      <h3>Gus Chuggins</h3>
                      <span class="title">Office Administrator/LVN</span>
                  </div>
                  <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eos asperiores, magni atque, a, necessitatibus consectetur molestiae rerum quaerat cum fugiat soluta quam voluptatum. Ut, totam debitis? Quisquam nesciunt tenetur officiis pariatur? Nostrum aspernatur officiis quos iusto nisi assumenda fugiat. 
                  </p>
              </div>
          </div>
          <div class="member">
              <div class="image">
                  <img loading="lazy" decoding="async" src="/images/about-image.jpg" alt="" width="" height=""></img>
              </div>
              <div class="content">
                  <div class="desc">
                      <h3>Rip Magnificant</h3>
                      <span class="title">PMHNP-BC</span>
                  </div>
                  <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eos asperiores, magni atque, a, necessitatibus consectetur molestiae rerum quaerat cum fugiat soluta quam voluptatum. Ut, totam debitis? Quisquam nesciunt tenetur officiis pariatur? Nostrum aspernatur officiis quos iusto nisi assumenda fugiat.
                  </p>
              </div>
          </div>
          <div class="member">
              <div class="image">
                  <img loading="lazy" decoding="async" src="/images/about-image.jpg" alt="" width="" height=""></img>
              </div>
              <div class="content">
                  <div class="desc">
                      <h3>Armie Sledgehammer</h3>
                      <span class="title">PMHNP-BC</span>
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
