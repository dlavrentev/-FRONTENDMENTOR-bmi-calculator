import React from "react";
import "./_limitations.scss";
import GENDER from "./../../assets/images/icon-gender.svg";
import AGE from "./../../assets/images/icon-age.svg";
import MUSCLE from "./../../assets/images/icon-muscle.svg";
import PREGNANCY from "./../../assets/images/icon-pregnancy.svg";
import RACE from "./../../assets/images/icon-race.svg";

function limitations() {
  return (
    <div className="limitations-container">
      <div className="limitations-header">
        <p className="h-l-32 c-gunmetal">Limitations of BMI</p>
        <p className="b-m c-dark-electric-blue">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="limitations-cards-container">
        <div className="limitations-card">
          <div>
            <img src={GENDER} alt="Gender" />
            <p className="h-s c-gunmetal">Gender</p>
          </div>
          <p className="b-m c-dark-electric-blue">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div className="limitations-card">
          <div>
            <img src={AGE} alt="Age" />
            <p className="h-s c-gunmetal">Age</p>
          </div>
          <p className="b-m c-dark-electric-blue">
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>
        <div className="limitations-card">
          <div>
            <img src={MUSCLE} alt="Muscle" />
            <p className="h-s c-gunmetal">Muscle</p>
          </div>
          <p className="b-m c-dark-electric-blue">
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </p>
        </div>
        <div className="limitations-card">
          <div>
            <img src={PREGNANCY} alt="Pregnancy" />
            <p className="h-s c-gunmetal">Pregnancy</p>
          </div>
          <p className="b-m c-dark-electric-blue">
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>
        <div className="limitations-card">
          <div>
            <img src={RACE} alt="Race" />
            <p className="h-s c-gunmetal">Race</p>
          </div>
          <p className="b-m c-dark-electric-blue">
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </div>
    </div>
  );
}

export default limitations;
