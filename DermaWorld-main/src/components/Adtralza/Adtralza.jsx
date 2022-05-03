import React from "react";
import AdtralzaImg from "../../IMG/Adtralza_img/Adtralza.jpg";
import Video from "./AdtralzaVideo/AdtralzaVideo";
import "./adtralza.css";

const Adtralza = () => {
  return (
    <div className="Adtralza_area">
      <div className="Adtralza_Pc">
        <div className="Adtralza_flex">
          <div className="Adtralza_text">
            <h1 className="Adtralza_heading">
              Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis
              signs and symptoms.
            </h1>

            <p className="Adtralza_breadText">
              By specifically targeting the IL-13 cytokine, Adtralza® inhibits
              the interaction with type II receptors and prevents IL-13-induced
              inflammatory responses in the skin(1,2).
              <br />
              <br />
              Adtralza® selectively modulates the dysregulated immune system
              by(1):
              <br />
              <br />
              — Reducing markers of skin inflammation <br />
              — Improving markers of skin barrier integrity <br />— Reducing
              epidermal thickness
            </p>

            <Video />
            <p className="Adtralza_breadText">Duration: 5:33</p>
          </div>

          <img
            className="Adtralza_img"
            src={AdtralzaImg}
            alt="Adtralza molecules"
          />
        </div>
      </div>

      {/* Mobile version ----------- */}

      <div className="Adtralza_Mobile">
        <div className="Adtralza_flex">
          <div className="Adtralza_text">
            <h1 className="Adtralza_heading">
              Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis
              signs and symptoms.
            </h1>
            <img
              className="Adtralza_img"
              src={AdtralzaImg}
              alt="Adtralza molecules"
            />
            <p className="Adtralza_breadText">
              By specifically targeting the IL-13 cytokine, Adtralza® inhibits
              the interaction with type II receptors and prevents IL-13-induced
              inflammatory responses in the skin(1,2).
              <br />
              <br />
              Adtralza® selectively modulates the dysregulated immune system
              by(1):
              <br />
              <br />
              — Reducing markers of skin inflammation <br />
              — Improving markers of skin barrier integrity <br />— Reducing
              epidermal thickness
            </p>

            <Video />
            <p className="Adtralza_breadText">Duration: 5:33</p>
          </div>
        </div>
      </div>
      {/* Mobile version -----------end */}
    </div>
  );
};

export default Adtralza;
