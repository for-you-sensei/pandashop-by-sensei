import React from "react";
import "./Feedback.css";
import { FeedbackForm } from "./FeedbackForm";

export function Feedback() {
  return (
    <div id="feedback-box">
      <div id="feedback">
        <p>Send Message</p>
        <FeedbackForm />
      </div>
    </div>
  );
}
