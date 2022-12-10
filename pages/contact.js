import React from "react";

const Contact = () => {
  return (
    <>
    <section id="int-hero">
        <h1 id="home-h">Contact Business</h1>
    </section>

    <section id="form">
        <div className="left-section">
            <span className="topper">Business Name</span>
            <h2>Send a Message</h2>
            <p>If you have any questions or concerns please feel free to reach out to us.  we respond to every call and email.</p>
            <form id="contact" name="Contact Form" method="post" data-netlify-recaptcha="true" data-netlify="true">
                    <div className="input-group">
                        <label htmlFor="name">Full Name</label>
                        <input id="name" aria-label="name" className="input1" name="name" placeholder="Full Name" type="text" tabindex="1" required></input>
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" aria-label="email" className="input1 right" name="email" placeholder="Email Address" type="email" tabindex="2" required></input>
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" aria-label="phone number" className="input1" name="phone" placeholder="Phone Number" type="tel" tabindex="3" required></input>
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="location">Location</label>
                        <input id="location" aria-label="location" className="input1 right" name="location" placeholder="Your Location" type="text" tabindex="4" required></input>
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="how">How did you hear about us</label>
                        <input id="how" aria-label="how did you hear about us" name="hear" placeholder="How Did You Hear About Us" type="text" tabindex="5" required></input>
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>
                    <div className="input-group textarea">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" aria-label="write your message" name="message" placeholder="Tell us about what you need help with" tabindex="6" required></textarea>
                        <div aria-hidden="true" className="hover-box"></div>
                    </div>
                <p className="form-submit">
                    <button name="submit" type="submit" id="contact-submit" className="button-solid" data-submit="...Sending">Submit</button>
                </p>
            </form>
        </div>
        <div className="contact-right">
            <div className="info-group">
                <span className="heading">Location</span>
                <span className="info">Somewhere, TX</span>
            </div>
            <div className="info-group">
                <span className="heading">Phone</span>
                <a className="info" href="tel:555-213-9120">(555) 213-9120</a>
            </div>
            <div className="info-group">
                <span className="heading">Email</span>
                <a className="info" href="mailto:info@email.com">info@email.com</a>
            </div>
            <div className="info-group">
                <span className="heading">Hours</span>
                <span className="info last">Mon to Sat: 9am to 7pm</span>
            </div>
        </div>
    </section>
    </>
  );
};
export default Contact;
