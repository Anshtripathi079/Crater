import "./footer.css";
import insta from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import facebook from "./images/facebook.png";
import whatsapp from "./images/whatsapp.png";
const Footer = () => {
  return (
    <div className="footer__container">
      <div>
        <h1>Crater</h1>
        <p>
          Crater is an AI-powered Business Manager for Creators & Freelancers.
        </p>
        <p> © 2023 Crater - All Right Reserved.</p>
      </div>
      <div className="middle__div">
        <p>Privacy Policy </p>
        <p>Terms & Conditions</p>
        <p>contact@thecrater.co</p>
      </div>
      <div className="right__div">
        <div className="footer_icons">
          <img src={insta} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
          <img src={facebook} alt="facebook" />
          <img src={whatsapp} alt="whatsapp" />
        </div>
        <p>Sports Inddex N Tech Private Limited</p>
        <p>
          14/4, J Block , 3rd Avenue, Anna Nagar ​East, Chennai, Tamil Nadu,
          600102
        </p>
      </div>
    </div>
  );
};

export default Footer;
