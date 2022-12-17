import React from "react";
import "./NewProducts.css";
import new1 from "../../Assets/Images/new1.png";
import new2 from "../../Assets/Images/new2.png";
import { FeedbackForm } from "../Feedback/FeedbackForm";

export function NewProducts() {
  const New = [
    {
      id: 0,
      date: "04/10/2022 01:00",
      img: new1,
    },
    {
      id: 1,
      date: "02/11/2022 00:59",
      img: new2,
    },
    {
      id: 2,
      date: "04/10/2022 01:00",
      img: new1,
    },
    {
      id: 3,
      date: "02/11/2022 00:59",
      img: new2,
    },
    {
      id: 4,
      date: "04/10/2022 01:00",
      img: new1,
    },
    {
      id: 5,
      date: "02/11/2022 00:59",
      img: new2,
    },
  ];
  return (
    <div id="newProducts">
      <p>Orders have arrived</p>

      <div className="newProducts-container">
        {New.map((item) => {
          return (
            <div className="newProducts-card" key={item.id}>
              <figure className="newProducts-figure">
                <img src={item.img} alt="" />
                <p>{item.date}</p>
              </figure>
            </div>
          );
        })}
      </div>

      <div className="newProducts-form">
        <div id="feedback">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}
