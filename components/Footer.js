import Link from "next/link";
import TheoryLogo from "../public/images/theory-logo.png";
import Image from "next/image";
import Pin from "../public/images/pin.svg";
import FooterPhone from "../public/images/footer-phone.svg";
import Email from "../public/images/email.svg";

export default function footer() {

return (
  <>
    <footer id="footer">
      <div className="container">
          <div className="left-section">
              <div className="footer-logo">
              <Image src={TheoryLogo} alt=""/>
              </div>
              <p>
              At Theory Landscaping, we work with you to build a successful business relationship and make sure you get the most out of our services. Communication and involvement are key, so feel free to let us know how we can accommodate your needs.
              </p>
          </div>
          <div className="right-section">
              <div className="lists">
                  <ul>
                      <li><h2>Company</h2></li>
                      <li><Link href="/"><a>Home</a></Link></li>
                      <li><Link href="/contact"><a>Contact</a></Link></li>
                  </ul>
                  <ul>
                      <li><h2>Services</h2></li>
                      <li><Link href="#"><a>Landscaping</a></Link></li>
                      <li><Link href="#"><a>Lawn Care Services</a></Link></li>
                      <li><Link href="#"><a>Garden Maintenance</a></Link></li>
                  </ul>
                  <ul>
                      <li><h2>Get in Touch</h2></li>
                      <li><div className="footer-icon"><Image loading="lazy" decoding="async" src={Pin} alt="" width="24" height="24" /></div><a href="" target="_blank">Vancouver, BC</a></li>
                      <li><div className="footer-icon"><Image loading="lazy" decoding="async" src={FooterPhone} alt="" width="24" height="24" /></div><a href="tel:555-213-9120">(604) 808-5339</a></li>
                      <li><div className="footer-icon"><Image loading="lazy" decoding="async" src={Email} alt="" width="24" height="24" /></div><a href="mailto:info@email.com">theorylandscaping@gmail.com</a></li>
                  </ul>
              </div>
  
              <div className="buttons">
                  <Link href="/contact"><a className="button-solid" >
                      Book an appointment
                  </a>
                  </Link>
              </div>
          </div>
      </div>
    </footer>
  </>
  );
}