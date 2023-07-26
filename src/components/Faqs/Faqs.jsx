import "./faqs.css";
import faqData from "./data";
const Faqs = () => {
  return (
    <section className="faqs__section">
      <div className="faq__heading">FAQ'S</div>
      <div className="faqs">
        {faqData.map((item, id) => {
          return (
            <div
              key={id}
              className="faq-card"
              style={{ background: item.bgColor }}
            >
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
