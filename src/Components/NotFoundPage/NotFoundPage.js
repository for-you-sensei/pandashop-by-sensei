import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div id="NotFoundPage">
      <p>ERROR 404</p>

      <p>Don't worry about this, just click this button</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >Back to Home</button>
    </div>
  );
}
