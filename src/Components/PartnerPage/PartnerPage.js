import React from "react";
import "./PartnerPage.css";
import { FeedbackForm } from "../Feedback/FeedbackForm";

export function PartnerPage() {
  const Names = [
    {
      id: 0,
      name: "Oybek Abdujabborov",
      phone: "+99 895 027 0496",
    },
    {
      id: 1,
      name: "Shuxratbek Mo’xiddinov",
      phone: "+998 93 484 04 83",
    },
  ];

  return (
    <div id="partnerPage">
      <p className="partnerPage-about">
        Hello, we are very happy to see you here. So, you are interested in
        business and sales, Yes, there is definitely a blessing in sales and it
        is very profitable. Now, with the development of time, many directions
        are moving to the online system. It is developing rapidly, especially in
        trade. You will never have to worry about taxes and utility bills,
        because you will do all your work online. <br />
        You only need one phone to get started you can buy products made in
        China from the comfort of your own home and send them to customers by
        mail. We will teach you all the secrets of online trading and you will
        start earning around $400-$500 net profit in 2-3 months and after 1 year
        we guarantee that your net profit will be more than $1000 per month if
        you work diligently. if you do !!!
      </p>

      <div className="partnerPage-contactUs">
        <p>To Contact Us</p>

        <div className="partnerPage-container">
          {Names.map((item) => {
            return (
              <div key={item.id} className="partnerPage-card">
                <p>{item.name}</p>
                <p>{item.phone}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="newProducts-form">
        <div id="feedback">
          <FeedbackForm backgroundColor="#d9d9d933" />
        </div>
      </div>
    </div>
  );
}
