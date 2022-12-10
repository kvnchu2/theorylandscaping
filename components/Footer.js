import Link from "next/link";

export default function footer() {

return (
  <>
    <footer id="footer">
      <div className="container">
          <div className="left-section">
              <Link href="/"><a className="logo"><img loading="lazy" decoding="async" src="/images/logo-white.svg" alt="logo" width="293" height="91"></img></a></Link>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aut. Molestias delectus rem nihil distinctio nemo assumenda laudantium. Veritatis, natus.
              </p>
          </div>
          <div className="right-section">
              <div className="lists">
                  <ul>
                      <li><h2>Company</h2></li>
                      <li><Link href="/"><a>Home</a></Link></li>
                      <li><Link href="/about"><a>About Us</a></Link></li>
                      <li><Link href="/contact"><a>Services</a></Link></li>
                  </ul>
                  <ul>
                      <li><h2>Support</h2></li>
                      <li><Link href="/contact"><a>Contact Us</a></Link></li>
                  </ul>
                  <ul>
                      <li><h2>Get in Touch</h2></li>
                      <li><img loading="lazy" decoding="async" src="/images/pin.svg" alt="" width="24" height="24"></img><a href="" target="_blank">Somewhere, Tx</a></li>
                      <li><img loading="lazy" decoding="async" src="/images/footer-phone.svg" alt="" width="24" height="24"></img><a href="tel:555-213-9120">(555) 213-9120</a></li>
                      <li><img loading="lazy" decoding="async" src="/images/email.svg" alt="" width="24" height="24"></img><a href="mailto:info@email.com">info@email.com</a></li>
                  </ul>
              </div>
  
              <div className="buttons">
                  <a className="button-solid" href="/contact.html" >
                      Call to action button
                  </a>
              </div>
          </div>
      </div>
    </footer>
  </>
  );
}