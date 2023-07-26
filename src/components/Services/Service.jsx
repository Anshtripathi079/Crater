import "./service.css";
import yt from "./images/youtube.png";
import insta from "./images/instagram.png";
import twitch from "./images/twitch.png";
import linkedin from "./images/linkedin.png";
import ServicesCard from "./ServicesCard";
const Service = () => {
  return (
    <div className="services__section">
      <p>Get all your Platform Data. All in one place.</p>
      <div className="logos">
        <span>
          <img src={yt} alt="youtube"></img>Youtube
        </span>
        <span>
          <img src={insta} />
          Instagram
        </span>
        <span>
          <img src={twitch} />
          Twitch
        </span>
        <span>
          <img src={linkedin} />
          Linkedin
        </span>
        <span>+more</span>
      </div>
      <div className="services__subdiv">
        <div>All the creator business tools.</div>
        <div>All with your Crater account.</div>
      </div>
      <ServicesCard />
    </div>
  );
};

export default Service;
