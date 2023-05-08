import React from "react";
import "./_calculator.scss";

function calculator() {
  return (
    <div className="calculator-container">
      <p className="calculator-title h-m">Enter your details below</p>
      <section className="calculator-unit-system">
        <div className="calculator-unit-system-option">
          <input
            type="radio"
            name="unit-system"
            id="metric"
            className="calculator-unit-system-input"
          />
          <label
            htmlFor="metric"
            className="calculator-unit-system-label b-m-bold"
          >
            Metric
          </label>
        </div>
        <div className="calculator-unit-system-option">
          <input
            type="radio"
            name="unit-system"
            id="imperial"
            className="calculator-unit-system-input"
          />
          <label
            htmlFor="imperial"
            className="calculator-unit-system-label b-m-bold"
          >
            Imperial
          </label>
        </div>
      </section>
      <div className="calculator-full-input">
        <label className="b-s c-dark-electric-blue" htmlFor="height">Height</label>
        <div className="calculator-input">
          <input type="text" className="h-m" />
          <label className="h-m c-blue" htmlFor="cm">cm</label>
        </div>
      </div>
      <div className="calculator-full-input margin-top-8">
        <label className="b-s c-dark-electric-blue" htmlFor="weight">Weight</label>
        <div className="calculator-input">
          <input type="text" className="h-m" />
          <label className="h-m c-blue" htmlFor="kg">kg</label>
        </div>
      </div>
      <div className="calculator-result c-pure-white">
        <p className="calculator-result-title b-m-bold">Your BMI is...</p>
        <p className="calculator-result-bmi h-l">23.4</p>
        <p className="calculator-result-description b-s">
          Your BMI suggests you’re a healthy weight. Your ideal weight is
          between 63.3kgs - 85.2kgs.
        </p>
      </div>
    </div>
  );
}

export default calculator;
