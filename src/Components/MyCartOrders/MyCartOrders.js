import React from "react";
import "./MyCartOrders.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export function MyCartOrders({ MyOrders }) {
  return (
    <div id="myOrders">
      {MyOrders.map((item) => {
        return (
          <div key={item.id} className="myOrders-card">
            <figure className="myOrders-figure">
              <img src={item.img} alt="" />
            </figure>

            <div className="myOrders-info">
              <p>
                <span>{item.name}</span>
              </p>

              <p>
                Price: <span>{item.price}</span> <span>x{item.quantity}</span>
              </p>

              <p>
                Size: <span>{item.size}</span>
              </p>

              <p>
                season: <span>{item.season}</span>
              </p>
            </div>

            <figure className="myOrders-delete">
              <DeleteForeverIcon />
            </figure>
          </div>
        );
      })}
    </div>
  );
}
