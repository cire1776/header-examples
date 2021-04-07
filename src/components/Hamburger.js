import React from "react";
import "./hamburger.scss";

function Hamburger({ action }) {
  const hamburger = React.useRef(null);

  function triggerAction(event) {
    const newState = action();
    if (newState) {
      hamburger.current.classList.add("open");
    } else {
      hamburger.current.classList.remove("open");
    }
  }

  return (
    <i
      className="hamburger"
      onClick={triggerAction}
      onKeyDown={triggerAction}
      role="button"
      tabIndex={0}
      ref={hamburger}
    >
      <span className="top-bar"></span>
      <span className="middle-bar"></span>
      <span className="bottom-bar"></span>
    </i>
  );
}

export default Hamburger;
