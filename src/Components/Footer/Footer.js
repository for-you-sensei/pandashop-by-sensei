import React from "react";
import logo from "../../Assets/Icons/Footer/Ellipse 12.png";

export function Footer() {
  return (
    <div id="footer">
      <div className="footer-privacy">
        <figure className="footer-logo">
          <img src={logo} alt="" />
        </figure>

        <div className="footer-texts">
          <p>PandaShop.Uz</p>
          <p>Online savdo platformasi</p>
          <p>Barcha xuquqlar ximoyalangan</p>
          <p>2022 yil</p>
        </div>
      </div>
    </div>
  );
}
