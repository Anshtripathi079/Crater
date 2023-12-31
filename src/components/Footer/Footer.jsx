import "./footer.css";
import insta from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import facebook from "./images/facebook.png";
import whatsapp from "./images/whatsapp.png";
const Footer = () => {
  return (
    <div className="footer__container" id="footer" data-aos="fade-up">
      <div className="left__div">
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
          <a href="https://www.instagram.com/crater.ai/" target="_black">
            <img src={insta} alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/company/the-crater/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://www.facebook.com/thecrater.co">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=919703615148">
            <img src={whatsapp} alt="whatsapp" />
          </a>
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
