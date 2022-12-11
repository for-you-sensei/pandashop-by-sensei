import React from "react";
import "./Header.css";
import search from "../../Assets/Icons/Header/search.svg";
import basket from "../../Assets/Icons/Header/shopping-basket.svg";
import user from "../../Assets/Icons/Header/user.svg";

export function Header() {
  return (
    <div id="header">
      <p className="pandashop-text">PandaShop</p>

      <div className="header-nav">
        <p>Delivery</p>
        <p>Contact</p>
      </div>

      <div className="header-icon">
        <figure className="header-figure">
          <img src={search} alt="" />
        </figure>

        <figure className="header-figure">
          <img src={basket} alt="" />
        </figure>

        <figure className="header-figure">
          <img src={user} alt="" />
        </figure>
      </div>
    </div>
  );
}
