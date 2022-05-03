import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./accordion.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px"); //put default hight to zero
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        {/*onClick to activate Accordion */}
        <Chevron className={`${setRotate}`} fill={"#fff"} />
        <p className="accordion__title">{props.title}</p>
      </button>
      <div
        ref={content}
        style={{ overflow: "hidden", maxHeight: `${setHeight}` }} //Overflow hidden to remove side scroll when opening and closing
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
