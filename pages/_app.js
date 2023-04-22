import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/navbar.modules.css";
import "../styles/home.modules.css";
import "../styles/root.modules.css";

import "../styles/contact.modules.css";


import "../styles/components/dropdown.modules.css";
import "../styles/components/sidebyside.modules.css";
import "../styles/components/reversesidebyside.modules.css";
import "../styles/components/about-sidebyside.modules.css";
import "../styles/components/services.modules.css";
import "../styles/components/home-services.modules.css";
import "../styles/components/cta.modules.css";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
