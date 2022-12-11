import React from "react";
import "./HomeCarousel.css";
import img1 from "../../Assets/Images/Без bg.png";

export function HomeCarousel() {
  return (
    <div id="home-carousel">
      <figure className="home-carousel-figure">
        <img src={img1} alt="" />
      </figure>
    </div>
  );
}
