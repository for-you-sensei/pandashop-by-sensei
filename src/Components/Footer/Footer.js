import React from "react";
import "./Footer.css";
import logo from "../../Assets/Icons/Footer/Ellipse 12.png";
import LanguageIcon from "@mui/icons-material/Language";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <div id="footer-box">
      <div id="footer">
        <div className="footer-privacy">
          <figure className="footer-logo">
            <img src={logo} alt="" />
          </figure>

          <div className="footer-texts-1">
            <p>PandaShop.Uz</p>
            <p>Online trading platform</p>
            <p>All rights reserved</p>
            <p>2022 yil</p>
          </div>
        </div>

        <div className="footer-texts-2">
          <p>Departments</p>
          <NavLink to="/all_products">All Products</NavLink>
          <NavLink to="/my_cart">My Cart</NavLink>
          <NavLink to="/new">New Products</NavLink>
          <NavLink to="/most_popular">Most Popular</NavLink>
        </div>

        <div className="footer-texts-2">
          <p>About Us</p>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/partner">Partners</NavLink>
          <NavLink to="/delivery">Delivery</NavLink>
          <NavLink to="/contact">Address</NavLink>
        </div>

        <div className="footer-texts-2">
          <p>Admins</p>
          <p>Oybek Abdujabborov</p>
          <p>Shuxratbek Mo’xiddinov</p>
          <p>Nozimjon Olimjonov</p>
          <p className="axsi">
            <LanguageIcon />
            <span>www.axsi.uz</span>
          </p>
        </div>
      </div>
    </div>
  );
}
