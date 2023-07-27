import "./features.css";
import check from "./images/check.png";
import exclamation from "./images/exclamation.png";
import { withCrater, withoutCrater } from "./data";
const Features = () => {
  return (
    <section className="features__container" data-aos="fade-up">
      <h2>Why Crater ?</h2>
      <div className="features">
        <div className="left-feature">
          <div className="title">Without Crater</div>

          <div className="feature__data">
            {withoutCrater.map((item, i) => {
              return (
                <div key={i} className="inner__data">
                  <img src={exclamation} alt="exclamation" />
                  <div className="inner__content">
                    <p>{item.title}</p>
                    <span>{item.content}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right-feature">
          <div className="title">With Crater</div>

          <div className="feature__data">
            {withCrater.map((item, i) => {
              return (
                <div key={i} className="inner__data">
                  <img src={check} alt="check" />
                  <div className="inner__content">
                    <p>{item.title}</p>
                    <span>{item.content}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
