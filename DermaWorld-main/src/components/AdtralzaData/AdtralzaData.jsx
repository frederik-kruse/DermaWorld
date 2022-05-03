import React from "react";
import UdAf from "./DataSVG/SVGone";
import HandHeart from "./DataSVG/SVGtwo";
import HandShield from "./DataSVG/SVGthree";
import "./adtralzaData.css";

const AdtralzaData = () => {
  return (
    <div className="Data_area">
      <div className="Data_flex">
        <div className="Data_box">
          <UdAf />
          <h2 className="Data_heading">Long term sustained improvement</h2>
          <br />
          <p>
            9 out of 10 respondents experienced sustained disease control in
            clinical trials 10, providing sustained improvements in the burden
            of disease(1,2, 1, 8*†‡).
          </p>
          <br />
          <a className="Data_link" href=".">
            See efficacy and trial data
          </a>
        </div>
        <div className="Data_box">
          <HandHeart />
          <h2 className="Data_heading">
            Improvements in the burden of disease
          </h2>
          <br />
          <p>
            Patients in clinical trials saw an improvement in Quality of Life
            with early symptom relief and sustained improvements in burden of
            disease from week 16 to 32(12,13).
          </p>
          <br />
          <a className="Data_link" href=".">
            Learn more about quality of life improvements
          </a>
        </div>
        <div className="Data_box">
          <HandShield />
          <h2 className="Data_heading">Good safety profile</h2>
          <br />
          <p>
            The overall frequency and severity of adverse events with Adtralza®
            were comparable to placebo at 16 weeks* and 52 weeks(19).
          </p>
          <br />
          <a className="Data_link" href=".">
            See safety profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdtralzaData;
