import React from "react";
import { MyOrdersInfo } from "../../Components/MyOrdersInfo/MyOrdersInfo";
import { MyOrders } from "../../Components/MyOrders/MyOrders";

import img1 from "../../Assets/Images/new arrival1.png";
import img2 from "../../Assets/Images/new arrival2.png";

export function Orders() {
  const Orders = [
    {
      id: 0,
      img: img2,
      name: "Qizlar uchun krasovka",
      price: "100000",
      size: "40",
      season: "yozgi",
      quantity: 3,
      orderStatus: 1,
    },
    {
      id: 1,
      img: img1,
      name: "Qizlar uchun krasovka 2",
      price: "120000",
      size: "35",
      season: "kuzgi",
      quantity: 2,
      orderStatus: 0,
    },
    {
      id: 2,
      img: img2,
      name: "Qizlar uchun krasovka",
      price: "100000",
      size: "40",
      season: "yozgi",
      quantity: 3,
      orderStatus: 1,
    },
    {
      id: 3,
      img: img1,
      name: "Qizlar uchun krasovka 2",
      price: "120000",
      size: "35",
      season: "kuzgi",
      quantity: 2,
      orderStatus: 0,
    },
    {
      id: 4,
      img: img2,
      name: "Qizlar uchun krasovka",
      price: "100000",
      size: "40",
      season: "yozgi",
      quantity: 3,
      orderStatus: 1,
    },
    {
      id: 5,
      img: img1,
      name: "Qizlar uchun krasovka 2",
      price: "120000",
      size: "35",
      season: "kuzgi",
      quantity: 2,
      orderStatus: 0,
    },
  ];

  return (
    <div id="cart">
      <div className="cart-orders">
        <MyOrders Orders={Orders} />
      </div>

      <div className="cart-acions">
        <MyOrdersInfo Orders={Orders} />
      </div>
    </div>
  );
}
