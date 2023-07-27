import React from "react";
import data from "./data";
import { Tilt } from "react-tilt";
const ServicesCard = ({ defaultOptions }) => {
  return (
    <div className="serviceCard__container">
      {data.map((item, i) => {
        return (
          <Tilt options={defaultOptions}>
            <div
              className="service__card"
              data-aos="zoom-in"
              key={i}
              // style={{ backgroundColor: `${item.bgcolor}` }}
            >
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          </Tilt>
        );
      })}
    </div>
  );
};

export default ServicesCard;
