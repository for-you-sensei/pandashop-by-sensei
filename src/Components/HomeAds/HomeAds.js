import React from "react";
import { AboutComponent } from "../AboutComponent/AboutComponent";
import "./HomeAds.css";

export function HomeAds({ data, name, link }) {
  return (
    <div id="HomeAds">
      <AboutComponent name={name} link={link} />

      <div className="HomeAds-container">
        {data.map((item) => {
          return (
            <div className="HomeAds-card" key={item.id}>
              <figure className="HomeAds-figure">
                <img src={item.img} alt="" />
              </figure>
              <p>{item.name}</p>
              <p>{item.price} sum</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
