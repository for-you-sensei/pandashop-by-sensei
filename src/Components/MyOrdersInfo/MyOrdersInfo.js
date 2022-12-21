import React from "react";
import "./MyOrdersInfo.css";

export function MyOrdersInfo({ Orders }) {
  return (
    <div id="">
      <p className="your-orders">Your Orders</p>

      <p className="myCartAbout-all-info">
        Caunt of orders: <span>{Orders.length}</span>
      </p>

      <p className="myCartAbout-all-info">
        total cost: <span> Not ready</span>
      </p>

      <p>1...</p>
      <p>2...</p>
      <p>3...</p>

      <p>Alert!!!</p>

      <p>
        It will be delivered to your home via KARGO within 15 working days from
        the day of receipt of the order. In order for the order to be accepted,
        you will need to make a 50% payment in advance. Refunds will be made for
        undelivered or lost products
      </p>
    </div>
  );
}
