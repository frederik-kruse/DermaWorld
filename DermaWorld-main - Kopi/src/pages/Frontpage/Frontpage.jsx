import React from "react";
import AdtralzaBanner from "../../components/AdtralzaBanner/AdtralzaBanner";
import ProductOverview from "../../components/ProductOverview/ProductOverview";
import AdtralzaData from "../../components/AdtralzaData/AdtralzaData";
import Adtralza from "../../components/Adtralza/Adtralza";
import KolVideos from "../../components/KolVideos/KolVideos";
import References from "../../components/References/References";
import ClinicalTools from "../../components/ClinicalTools/ClinicalTools";
//Import of all components

import "./frontpage.css";

const Forside = () => {
  return (
    <div>
      <AdtralzaBanner />
      <ProductOverview />
      <AdtralzaData />
      <Adtralza />
      <ClinicalTools />
      <KolVideos />
      <References />
    </div>
  );
};

export default Forside;
