import "./testimonials.css";
import socialCard from "./data";
import more from "./photos/more.png";
import like from "./photos/like.png";
import comment from "./photos/comment.png";
import send from "./photos/send.png";

import save from "./photos/save2.png";
const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonial">
      <div className="test-title">10,000+ Users have signed up!</div>
      <div className="testimonial__container">
        <div className="testimonials__innersection">
          {socialCard.map((item, id) => {
            return (
              <div className="testimonial__card" key={id}>
                <div className="inner__main">
                  <div className="header__testimonial">
                    <div className="left-header">
                      <img src={item.dp} alt="profilepic" />
                      <div className="left-text">
                        <p>{item.username}</p>
                        <span>{item.profession}</span>
                      </div>
                    </div>
                    <img src={more} />
                  </div>
                  <div className="comment_section">
                    <p>"{item.comment}"</p>
                  </div>
                  <div className="footer">
                    <div className="left-footer">
                      <img src={like} />
                      <img src={comment} />
                      <img src={send} />
                    </div>
                    <div className="right-footer">
                      <img src={save} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="testimonial_btn">
        <button>Get Early Access</button>
      </div>
    </section>
  );
};

export default Testimonials;
