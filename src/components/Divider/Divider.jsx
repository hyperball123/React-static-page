import React from "react";
import "./Divider.css";

function Divider({ className, margin, height, padding }) {
  return (
    <div
      className={`row ${className || ""}`}
      style={{ margin, height, padding }}
    >
      <p className={`darkColor ${className || ""}`}></p>
    </div>
  );
}

export default Divider;
