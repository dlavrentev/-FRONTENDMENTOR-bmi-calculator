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
          <label htmlFor="metric" className="calculator-unit-system-label b-m-bold">
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
          <label htmlFor="imperial" className="calculator-unit-system-label b-m-bold">
            Imperial
          </label>
        </div>
      </section>
      <div className="calculator-input">
        <label htmlFor="height" className="calculator-input-label b-s c-dark-electric-blue">
          Height
        </label>
        <input
          type="text"
          name="height"
          id="height"
          className="calculator-input-field h-m"
        />
      </div>
      <div className="calculator-input">
        <label htmlFor="weight" className="calculator-input-label b-s c-dark-electric-blue">
          Weight
        </label>
        <input
          type="text"
          name="weight"
          id="weight"
          className="calculator-input-field h-m"
        />
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
