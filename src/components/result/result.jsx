import React from 'react'
import "./_result.scss"
import EATINGMAN from "./../../assets/images/image-man-eating.webp"

function result() {
  return (
    <div className="result-container">
      <img src={EATINGMAN} alt="Man eating" />
      <section className="result-text">
        <p className="h-l-32 result-header c-gunmetal">What your BMI result means</p>
        <p className="result-paragraph b-m c-dark-electric-blue">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </section>
    </div>
  )
}

export default result