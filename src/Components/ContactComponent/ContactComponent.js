import React from "react";
import "./ContactComponent.css";
import Intagram from "../../Assets/Icons/Contact/Instagram.png";
import YouTube from "../../Assets/Icons/Contact/YouTube.png";
import TikTok from "../../Assets/Icons/Contact/TikTok.png";
import Telegram from "../../Assets/Icons/Contact/Telegram.png";
import Snapchat from "../../Assets/Icons/Contact/Snapchat.png";
import Facebook from "../../Assets/Icons/Contact/Facebook.png";

export function ContactComponent() {
  const links1 = [
    {
      id: 0,
      img: Intagram,
      text: "Instagram",
    },
    {
      id: 1,
      img: YouTube,
      text: "YouTube",
    },
    {
      id: 2,
      img: TikTok,
      text: "TikTok",
    },
  ];

  const links2 = [
    {
      id: 0,
      img: Telegram,
      text: "Telegram",
    },
    {
      id: 1,
      img: Snapchat,
      text: "Snapchat",
    },
    {
      id: 2,
      img: Facebook,
      text: "Facebook",
    },
  ];

  const phones = [
    {
      id: 0,
      text: "+998 90 000 00 00",
    },
    {
      id: 1,
      text: "+998 90 000 00 01",
    },
    {
      id: 2,
      text: "+998 90 000 00 02",
    },
  ];

  return (
    <div id="contactComponent">
      <div className="contactComponent-text">
        <p className="contactComponent-address">Namangan v, To’raqorg’on t Axsi</p>
        <div className="contactComponent-container">
          <div className="contactComponent-links">
            {links1.map((item) => {
              return (
                <div key={item.id} className="contactComponent-card">
                  <img src={item.img} alt="" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
          <div className="contactComponent-links">
            {links2.map((item) => {
              return (
                <div key={item.id} className="contactComponent-card">
                  <img src={item.img} alt="" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
          <div className="contactComponent-links">
            {phones.map((item) => {
              return (
                <div key={item.id}>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
