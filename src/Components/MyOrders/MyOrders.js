import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export function MyOrders({ Orders }) {
  return (
    <div id="myOrders">
      {Orders.map((item) => {
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

              <div className="myOrders-status-media">
                <p>
                  order status:{" "}
                  <span>{item.orderStatus ? "accepted" : "is expected"}</span>
                </p>
              </div>
            </div>

            <div className="myOrders-status">
              <p>
                order status:{" "}
                <span>{item.orderStatus ? "accepted" : "is expected"}</span>
              </p>
            </div>

            <figure
              className="myOrders-delete"
              style={
                item.orderStatus ? { color: "green" } : { color: "#ff0000" }
              }
            >
              {item.orderStatus ? <CheckCircleIcon /> : <DeleteForeverIcon />}
            </figure>
          </div>
        );
      })}
    </div>
  );
}
