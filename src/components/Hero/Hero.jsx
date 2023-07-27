import "./hero.css";
import hero from "./hero-img.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Tilt } from "react-tilt";

const Hero = ({ defaultOptions }) => {
  const [text] = useTypewriter({
    words: [
      "Rebels",
      "Makers",
      "Creators",
      "Go-Getters",
      "Leaders",
      "Challengers",
      "Freelancers",
    ],
    loop: {},
  });
  return (
    <div className="hero__container">
      <div className="hero__section">
        <div className="left__hero" data-aos="fade-right">
          <h1>Crater</h1>
          <h2>
            AI-powered Business Manager for{" "}
            <span
              style={{ fontWeight: "bold" }}
              className="yellow__txt auto-span"
            >
              {text}
            </span>
            <Cursor />
          </h2>
          <p>
            Focus on doing what you love, instead of having to open 10 different
            ​social media platforms, negotiate brand deals, chase invoices,
            ​manage payments, or file taxes.
          </p>
          <p>
            It's like having your own{" "}
            <span className="yellow__txt">BUSINESS MANAGER !</span>
          </p>
          <a href="#">Get Early access</a>
        </div>
        <div className="right__hero" data-aos="fade-left">
          <Tilt options={defaultOptions}>
            <img src={hero} alt="hero-img" />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Hero;
