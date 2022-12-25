import React from "react";

export function AllProducts({ data }) {
  return (
    <div id="HomeAds">
      <div className="HomeAds-container">
        {data.map((item) => {
          return (
            <div className="HomeAds-card" key={item.id}>
              <div
                className="HomeAds-discaunt"
                style={
                  item.discaunt > 0 ? { display: "flex" } : { display: "none" }
                }
              >
                {item.discaunt}%
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
