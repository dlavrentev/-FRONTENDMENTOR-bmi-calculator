import React from "react";
import "./_header.scss";

function header() {
  return (
    <div className="header-container">
      <img className="header-logo" src="/src/assets/images/logo.svg" alt="Body Mass Index Calculator Logo" />
      <p className="header-heading h-l c-gunmetal">Body Mass Index Calculator</p>
      <p className="header-p b-m c-dark-electric-blue">
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
    </div>
  );
}

export default header;
