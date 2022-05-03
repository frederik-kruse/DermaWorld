import React from "react";
import LEOLogo from "../../IMG/Logo/LEO logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <img className="Footer_logo" src={LEOLogo} alt="Logo for Leo" />
        <div className="Copy_allRights">
          <p>
            © Copyright LEO Pharma 2020 <br />
            LEO and the LEO Lion Design <br />
            are registered trademarks <br /> of LEO Pharma <br />
            All rights reserved
          </p>

          <a href="." className="Leo_corporate">
            LEO Pharma corporate website
          </a>
        </div>
        <div className="footer_links">
          <a href="." className="Footer_link">
            Contact
          </a>
          <div className="footer_vLine"></div>
          <a href="." className="Footer_link">
            Imprint
          </a>
          <div className="footer_vLine"></div>
          <a href="." className="Footer_link">
            Conditions
          </a>
          <div className="footer_vLine"></div>
          <a href="." className="Footer_link">
            Terms of use
          </a>
          <div className="footer_vLine"></div>
          <a href="." className="Footer_link">
            Privacy
          </a>
          <div className="footer_vLine"></div>
          <a href="." className="Footer_link">
            Cookie content
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
