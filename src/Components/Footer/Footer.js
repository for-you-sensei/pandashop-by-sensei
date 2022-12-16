import React from "react";
import "./Footer.css";
import logo from "../../Assets/Icons/Footer/Ellipse 12.png";
import LanguageIcon from "@mui/icons-material/Language";

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
            <p>Online savdo platformasi</p>
            <p>Barcha xuquqlar ximoyalangan</p>
            <p>2022 yil</p>
          </div>
        </div>

        <div className="footer-texts-2">
          <p>Departments</p>
          <p>All Products</p>
          <p>My Cart</p>
          <p>New Products</p>
          <p>Most Popular</p>
        </div>

        <div className="footer-texts-2">
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Partners</p>
          <p>Delivery</p>
          <p>Address</p>
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
