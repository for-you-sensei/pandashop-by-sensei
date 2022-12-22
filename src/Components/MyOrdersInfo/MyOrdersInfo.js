import React from "react";
import "../MyCartAbout/MyCartAbout.css";
import PersonIcon from "@mui/icons-material/Person";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export function MyOrdersInfo({ Orders }) {
  const userInfo = {
    fullname: "Hasanbayev Behruz",
    phone: "+998 94 271 97 77",
    address: "Namangan, qayer, qayer",
  };

  return (
    <div id="myCartAbout">
      <p className="your-orders">Your Orders</p>

      <p className="myCartAbout-all-info">
        Caunt of orders: <span>{Orders.length}</span>
      </p>

      <p className="myCartAbout-all-info">
        total cost: <span> Not ready</span>
      </p>

      <div className="myCart-userInfo">
        <p>
          <PersonIcon /> {userInfo.fullname}
        </p>
        <p>
          <PhoneAndroidIcon /> {userInfo.phone}
        </p>
        <p>
          <LocationOnIcon /> {userInfo.address}
        </p>
      </div>

      <div className="myCart-alert">
        <p>Alert!!!</p>

        <p>
          It will be delivered to your home via KARGO within 15 working days
          from the day of receipt of the order. In order for the order to be
          accepted, you will need to make a 50% payment in advance. Refunds will
          be made for undelivered or lost products
        </p>
      </div>
    </div>
  );
}
