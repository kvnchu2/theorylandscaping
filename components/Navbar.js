import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import TheoryLogo from "../public/images/theory-logo.png";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Testimonials", href: "/testimonials"},
  { text: "Contact", href: "/contact" },
  { text: "FAQ", href: '/faq'}
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);

  return (
    <header>
      <nav className={`nav`}>
        <div className="nav-div">
          <Link href={"/"}>
            <a>
              <div className="logo">
                <Image src={TheoryLogo} alt="kinesiologywithkevin"/>
              </div>
            </a>
          </Link>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="navbar-right">
            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
              {/* {MENU_LIST.map((menu, idx) => (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}
                >
                  <NavItem active={activeIdx === idx} {...menu} />
                </div>
              ))} */}
              <div
                  onClick={() => {
                    
                    setNavActive(false);
                  }}
                  key="Home"
                >
                  <NavItem text="Home" href="/"  />
              </div>
              <div className="dropdown">
                <button className="dropbtn">Services
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <Link href="/services/Aeration"><a href="#">Aeration</a></Link>
                  <Link href="/services/FallSpringCleanup"><a href="#">Fall/Spring Cleanup</a></Link>
                  <Link href="/services/HedgeMaintenance"><a href="#">Hedge Maintenance</a></Link>
                  <Link href="/services/JunkGreenWasteRemoval"><a href="#">Junk and Green Waste Removal</a></Link>
                  <Link href="/services/PowerRaking"><a href="#">Power Raking</a></Link>
                  <Link href="/services/PressureWashing"><a href="#">Pressure Washing</a></Link>
                  <Link href="/services/Pruning"><a href="#">Pruning</a></Link>
                  <Link href="/services/SnowRemoval"><a href="#">Snow Removal and Ice Control</a></Link>
                </div>
              </div>
              <div
                  onClick={() => {
                    
                    setNavActive(false);
                  }}
                  key="Testimonials"
                >
                  <NavItem text="Testimonials" href="/testimonials"  />
              </div>
              <div
                  onClick={() => {
                    
                    setNavActive(false);
                  }}
                  key="Contact"
                >
                  <NavItem text="Contact" href="/contact"  />
              </div>


            </div>

            
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
