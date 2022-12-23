import React from "react";
import "./Feedback.css";
import { PatternFormat } from "react-number-format";

export function FeedbackForm({ backgroundColor }) {
  return (
    <form className="feedback-form">
      <textarea
        placeholder="Leave a message and we will contact you"
        style={{ background: backgroundColor }}
      ></textarea>

      <div className="feedback-form-inputs">
        <input
          type="text"
          placeholder="Name"
          style={{ background: backgroundColor }}
        />

        <PatternFormat
          // value={phone}
          format="+99 8(##) ### ####"
          allowEmptyFormatting
          style={{ background: backgroundColor }}
          mask="_"
          onValueChange={(e) => {
            //   setPhone(e.floatValue);
          }}
        />

        <button>Send Message</button>
      </div>
    </form>
  );
}
