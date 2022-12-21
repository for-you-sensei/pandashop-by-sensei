import React from "react";
import { useNavigate } from "react-router-dom";
import "./MyCartAbout.css";

export function MyCartAbout({ MyOrders }) {
  const navigate = useNavigate();

  return (
    <div id="myCartAbout">
      <button
        onClick={() => {
          navigate("/my_orders");
        }}
      >
        My Orders
      </button>

      <p>Sizning buyutmalaringiz</p>

      <p className="myCartAbout-all-info">
        Caunt of orders: <span>{MyOrders.length}</span>
      </p>

      <p className="myCartAbout-all-info">
        total cost: <span> Not ready</span>
      </p>

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
