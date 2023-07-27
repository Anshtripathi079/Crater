import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Crater</h3>

      <nav ref={navRef}>
        <a href="#">Home</a>
        <a href="#services">Services</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#faq">Faq</a>
        <a href="#contact">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

// import { useState } from "react";
// import open from "./images/open.png";
// import close from "./images/close.png";
// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <span>Crater</span>

//       <ul className="nav__ul">
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#services">Services</a>
//         </li>
//         <li>
//           <a href="#testimonial">Testimonials</a>
//         </li>
//         <li>
//           <a href="#faq">FAQ's</a>
//         </li>
//         <li>
//           <a href="#footer">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
