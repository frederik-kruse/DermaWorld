import React from "react";
import Woman from "../../IMG/ClinicalTools_img/Woman-doc.png";
import Patient from "../../IMG/ClinicalTools_img/Patient-injection.png";
import "./clinicaltools.css";

const ClinicalTools = () => {
  return (
    <div className="ClinicalTools_area">
      <div className="ClinicalTools_colunm">
        <h1 className="ClinicalTools_heading">Clinical tools - at a glance</h1>
        <div className="ClinicalTools_boxFlex">
          <div className="ClinicalTools_box">
            <img
              className="ClinicalTools_img"
              src={Woman}
              alt="Doctor under the category, Dosing guide"
            />
            <div className="ClinicalTools_text">
              <h2 className="ClinicalTools_secondaryHeading">Dosing guide</h2>
              <p className="ClinicalTools_breadText">
                Adtralza® has a straightforward dosing regimen, with 150 mg
                prefilled syringes(1).
              </p>
              <a className="ClinicalTools_link" href=".">
                Learn more about application and dosing
              </a>
            </div>
          </div>
          <div className="ClinicalTools_box">
            <img
              className="ClinicalTools_img"
              src={Patient}
              alt="Patient injecting a dose"
            />
            <div className="ClinicalTools_text">
              <h2 className="ClinicalTools_secondaryHeading">
                Patient injection made simple
              </h2>
              <p className="ClinicalTools_breadText">
                This step by step video guide shows the patient how to self
                inject using the two syringes that come in the Adtralza® carton.
              </p>
              <a className="ClinicalTools_link" href=".">
                Watch the video
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalTools;
