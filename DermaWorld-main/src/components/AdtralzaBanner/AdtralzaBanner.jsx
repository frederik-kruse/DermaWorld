import React from "react";
import Banner from "../../IMG/AdtralzaBanner_img/ADTRALBanner.jpg";
import AdtralzaLogo from "../../IMG/Logo/AdtralzaLogo.svg";
import "./adtralzaBanner.css";

const AdtralzaBanner = () => {
  return (
    <div className="AdtralzaBanner_area">
      <div className="banner_flex">
        <img
          className="AdtralzaLogo"
          src={AdtralzaLogo}
          alt="Logo for Adtralza"
        />
        <h1 className="Banner_text">
          Adtralza® is a new treatment for adult patients with
          moderate-to-severe atopic dermatitis (eczema) who are candidates for
          systemic therapy.
        </h1>
      </div>
      <img className="Adtralza_bannerIMG" src={Banner} alt="Adtralza banner" />
    </div>
  );
};

export default AdtralzaBanner;
