import React from "react";
import "./_advice.scss";
import EAT from "./../../assets/images/icon-eating.svg";
import EXERCISE from "./../../assets/images/icon-exercise.svg";
import SLEEP from "./../../assets/images/icon-sleep.svg";

function advice() {
  return (
    <div className="advice-container">
      <div className="advice-card">
        <img src={EAT} alt="Eat" />
        <p className="h-m c-gunmetal">Healthy eating</p>
        <p className="b-m c-dark-electric-blue">
          Healthy eating promotes weight control, disease prevention, better
          digestion, immunity, mental clarity, and mood.
        </p>
      </div>
      <div className="advice-card">
        <img src={EXERCISE} alt="Exercise" />
        <p className="h-m c-gunmetal">Regular exercise</p>
        <p className="b-m c-dark-electric-blue">
          Exercise improves fitness, aids weight control, elevates mood, and
          reduces disease risk, fostering wellness and longevity.
        </p>
      </div>
      <div className="advice-card">
        <img src={SLEEP} alt="Sleep" />
        <p className="h-m c-gunmetal">Adequate sleep</p>
        <p className="b-m c-dark-electric-blue">
          Sleep enhances mental clarity, emotional stability, and physical
          wellness, promoting overall restoration and rejuvenation.
        </p>
      </div>
    </div>
  );
}

export default advice;
