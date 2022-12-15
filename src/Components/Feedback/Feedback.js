import React from "react";
import "./Feedback.css";
import { PatternFormat } from "react-number-format";

export function Feedback() {
  return (
    <div id="feedback-box">
      <div id="feedback">
        <p>Send Message</p>
        <form className="feedback-form">
          <textarea placeholder="Write anything"></textarea>
          <div className="feedback-form-inputs">
            <input type="text" placeholder="Name" />

            <PatternFormat
              // value={phone}
              format="+99 8(##) ### ####"
              allowEmptyFormatting
              mask="_"
              onValueChange={(e) => {
                console.log();
                //   setPhone(e.floatValue);
              }}
            />

            <button>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}
