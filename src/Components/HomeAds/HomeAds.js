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
              <div
                className="HomeAds-discount"
                style={
                  item.discount > 0 ? { display: "flex" } : { display: "none" }
                }
              >
                {item.discount}%
              </div>

              <figure className="HomeAds-figure">
                <img src={item.img} alt="" />
              </figure>
              <p>{item.name}</p>
              <p className="HomeAds-card-last">{item.price} sum</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
