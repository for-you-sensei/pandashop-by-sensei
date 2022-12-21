import React from "react";
import "./Cart.css";
import { MyCartOrders } from "../../Components/MyCartOrders/MyCartOrders";
import { MyCartAbout } from "../../Components/MyCartAbout/MyCartAbout";
import { MyCartActions } from "../../Components/MyCartActions/MyCartActions";

import img1 from "../../Assets/Images/new arrival1.png";
import img2 from "../../Assets/Images/new arrival2.png";

export function Cart() {
  const MyOrders = [
    {
      id: 0,
      img: img1,
      name: "Qizlar uchun krasovka",
      price: "100000",
      size: "40",
      season: "yozgi",
      quantity: 3,
    },
    {
      id: 1,
      img: img2,
      name: "Qizlar uchun krasovka 2",
      price: "120000",
      size: "35",
      season: "kuzgi",
      quantity: 2,
    },
    {
      id: 2,
      img: img1,
      name: "Qizlar uchun krasovka",
      price: "100000",
      size: "40",
      season: "yozgi",
      quantity: 3,
    },
    {
      id: 3,
      img: img2,
      name: "Qizlar uchun krasovka 2",
      price: "120000",
      size: "35",
      season: "kuzgi",
      quantity: 2,
    },
    {
      id: 4,
      img: img1,
      name: "Qizlar uchun krasovka",
      price: "100000",
      size: "40",
      season: "yozgi",
      quantity: 3,
    },
    {
      id: 5,
      img: img2,
      name: "Qizlar uchun krasovka 2",
      price: "120000",
      size: "35",
      season: "kuzgi",
      quantity: 2,
    },
    {
      id: 6,
      img: img1,
      name: "Qizlar uchun krasovka",
      price: "100000",
      size: "40",
      season: "yozgi",
      quantity: 3,
    },
    {
      id: 7,
      img: img2,
      name: "Qizlar uchun krasovka 2",
      price: "120000",
      size: "35",
      season: "kuzgi",
      quantity: 2,
    },
  ];

  return (
    <div id="cart">
      <div className="cart-orders">
        <MyCartOrders MyOrders={MyOrders} />
      </div>

      <div className="cart-acions">
        <MyCartAbout MyOrders={MyOrders} />

        <div className="cart-form">
          <MyCartActions />
        </div>
      </div>
    </div>
  );
}
