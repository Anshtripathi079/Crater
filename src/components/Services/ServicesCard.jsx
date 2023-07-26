import React from "react";
import data from "./data";
const ServicesCard = () => {
  return (
    <div className="serviceCard__container">
      {data.map((item, i) => {
        return (
          <div
            className="service__card"
            key={i}
            style={{ backgroundColor: `${item.bgcolor}` }}
          >
            <h3>{item.heading}</h3>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesCard;
