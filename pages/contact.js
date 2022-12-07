import React from "react";

const Contact = () => {
  return (
    <>
    <section id="int-hero">
        <h1 id="home-h">Contact Business</h1>
    </section>

    <section id="form">
        <div class="left-section">
            <span class="topper">Business Name</span>
            <h2>Send a Message</h2>
            <p>If you have any questions or concerns please feel free to reach out to us.  we respond to every call and email.</p>
            <form id="contact" name="Contact Form" method="post" data-netlify-recaptcha="true" data-netlify="true">
                    <div class="input-group">
                        <label for="name">Full Name</label>
                        <input id="name" aria-label="name" class="input1" name="name" placeholder="Full Name" type="text" tabindex="1" required></input>
                        <div aria-hidden="true" class="hover-box"></div>
                    </div>

                    <div class="input-group">
                        <label for="email">Email</label>
                        <input id="email" aria-label="email" class="input1 right" name="email" placeholder="Email Address" type="email" tabindex="2" required></input>
                        <div aria-hidden="true" class="hover-box"></div>
                    </div>

                    <div class="input-group">
                        <label for="phone">Phone</label>
                        <input id="phone" aria-label="phone number" class="input1" name="phone" placeholder="Phone Number" type="tel" tabindex="3" required></input>
                        <div aria-hidden="true" class="hover-box"></div>
                    </div>
                    <div class="input-group">
                        <label for="location">Location</label>
                        <input id="location" aria-label="location" class="input1 right" name="location" placeholder="Your Location" type="text" tabindex="4" required></input>
                        <div aria-hidden="true" class="hover-box"></div>
                    </div>
                    <div class="input-group">
                        <label for="how">How did you hear about us</label>
                        <input id="how" aria-label="how did you hear about us" name="hear" placeholder="How Did You Hear About Us" type="text" tabindex="5" required></input>
                        <div aria-hidden="true" class="hover-box"></div>
                    </div>
                    <div class="input-group textarea">
                        <label for="message">Message</label>
                        <textarea id="message" aria-label="write your message" name="message" placeholder="Tell us about what you need help with" tabindex="6" required></textarea>
                        <div aria-hidden="true" class="hover-box"></div>
                    </div>
                <p class="form-submit">
                    <button name="submit" type="submit" id="contact-submit" class="button-solid" data-submit="...Sending">Submit</button>
                </p>
            </form>
        </div>
        <div class="contact-right">
            <div class="info-group">
                <span class="heading">Location</span>
                <span class="info">Somewhere, TX</span>
            </div>
            <div class="info-group">
                <span class="heading">Phone</span>
                <a class="info" href="tel:555-213-9120">(555) 213-9120</a>
            </div>
            <div class="info-group">
                <span class="heading">Email</span>
                <a class="info" href="mailto:info@email.com">info@email.com</a>
            </div>
            <div class="info-group">
                <span class="heading">Hours</span>
                <span class="info last">Mon to Sat: 9am to 7pm</span>
            </div>
        </div>
    </section>
    </>
  );
};
export default Contact;
