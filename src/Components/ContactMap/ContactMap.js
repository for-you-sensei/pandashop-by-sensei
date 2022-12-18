import React from "react";
import "./ContactMap.css";

export function ContactMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1554.574238156671!2d71.397339!3d40.91724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff38f02992f42c43!2sPandaShop!5e1!3m2!1sru!2sus!4v1670738577956!5m2!1sru!2sus"
      allowFullScreen=""
      // style={{
      //   border: 0,
      //   width: "100%",
      //   height: "500px",
      // }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Pandashop"
      id="map"
    />
  );
}
