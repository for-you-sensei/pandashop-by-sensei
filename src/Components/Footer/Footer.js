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
          <p>Barcha maxsulotlar</p>
          <p>Mening savatcham</p>
          <p>Yangi maxsulotlar</p>
          <p>Eng mashxurlari</p>
        </div>

        <div className="footer-texts-2">
          <p>About Us</p>
          <p>Biz bilan aloqa</p>
          <p>Xamkorlik</p>
          <p>Yetkazib berish</p>
          <p>Manzil</p>
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
