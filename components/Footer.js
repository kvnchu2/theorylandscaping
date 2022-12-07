export default function footer() {

return (
  <>
    <footer id="footer">
      <div class="container">
          <div class="left-section">
              <a class="logo" href="/index.html"><img loading="lazy" decoding="async" src="/images/logo-white.svg" alt="logo" width="293" height="91"></img></a>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aut. Molestias delectus rem nihil distinctio nemo assumenda laudantium. Veritatis, natus.
              </p>
          </div>
          <div class="right-section">
              <div class="lists">
                  <ul>
                      <li><h2>Company</h2></li>
                      <li><a href="/index.html">Home</a></li>
                      <li><a href="/about.html">About Us</a></li>
                      <li><a href="/contact.html">Services</a></li>
                  </ul>
                  <ul>
                      <li><h2>Support</h2></li>
                      <li><a href="/contact.html">Contact Us</a></li>
                  </ul>
                  <ul>
                      <li><h2>Get in Touch</h2></li>
                      <li><img loading="lazy" decoding="async" src="/images/pin.svg" alt="" width="24" height="24"></img><a href="" target="_blank">Somewhere, Tx</a></li>
                      <li><img loading="lazy" decoding="async" src="/images/footer-phone.svg" alt="" width="24" height="24"></img><a href="tel:555-213-9120">(555) 213-9120</a></li>
                      <li><img loading="lazy" decoding="async" src="/images/email.svg" alt="" width="24" height="24"></img><a href="mailto:info@email.com">info@email.com</a></li>
                  </ul>
              </div>
  
              <div class="buttons">
                  <a class="button-solid" href="/contact.html" >
                      Call to action button
                  </a>
              </div>
          </div>
      </div>
    </footer>
  </>
  )
}