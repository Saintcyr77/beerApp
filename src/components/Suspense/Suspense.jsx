import React from "react";
import "../Suspense/suspense.css";
const Suspense = () => {
  return (
    <div class="container">
      <div class="line"></div>
      <div class="line d1"></div>
      <div class="line d2"></div>
      <div class="line d3"></div>
      <div class="line d4"></div>
      <div class="line d5"></div>
      <br />
      <div class="caption">
        <p style="display:inline-block;">Loading</p>
        <div class="dot">.</div>
        <div class="dot">.</div>
        <div class="dot">.</div>
      </div>
    </div>
  );
};

export default Suspense;
