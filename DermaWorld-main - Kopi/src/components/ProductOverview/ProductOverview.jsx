import React from "react";
import ProductImg from "../../IMG/ProductOverview_img/adtralza-packshot-gebaut.png";
import "./productOverview.css";

const ProductOverview = () => {
  return (
    <div className="ProductOverview_area">
      <div className="ProductOverview_flex">
        <img
          className="ProductOverview_img"
          src={ProductImg}
          alt="Product Adtralza"
        />

        <div className="ProductOverview_text">
          <h1 className="ProductOverview_heading">
            It is the first and only biologic developed to specifically
            neutralize IL-13, a key driver <br /> of atopic dermatitis signs and
            <br />
            symptoms(1,2)
          </h1>
          <p className="ProductOverview_breadText">
            Learn more about how Adtralza® works and how to use it in treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
