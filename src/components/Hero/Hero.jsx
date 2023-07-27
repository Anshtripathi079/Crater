import "./hero.css";
import hero from "./hero-img.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Hero = () => {
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
        <div className="left__hero">
          <h1>Crater</h1>
          <h2>
            AI-powered Business Manager for{" "}
            <span
              style={{ fontWeight: "bold", fontSize: "2rem" }}
              className="yellow__txt"
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
        <div className="right__hero">
          <img src={hero} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
