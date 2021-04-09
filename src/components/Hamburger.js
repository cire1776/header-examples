import React from "react";
import "./hamburger.scss";

export function Closeburger({ action }) {
  const hamburger = React.useRef(null);

  function triggerAction(event) {
    if (action) {
      action();
    }
  }

  return (
    <i
      className="hamburger open"
      onClick={triggerAction}
      onKeyDown={triggerAction}
      role="button"
      tabIndex={0}
      ref={hamburger}
    >
      <span className="top-bar"></span>
      {/* <span className="middle-bar"></span> */}
      <span className="bottom-bar"></span>
    </i>
  );
}

function Hamburger({ action, forceOpen }) {
  const hamburger = React.useRef(null);
  const forcedOpen = React.useState(forceOpen)[0];

  function triggerAction(event) {
    let newState;
    if (action) {
      newState = action();
    }

    if (newState) {
      hamburger.current.classList.add("open");
    } else {
      hamburger.current.classList.remove("open");
    }
  }

  React.useEffect(() => {
    if (forcedOpen) {
      hamburger.current.classList.add("open");
    }
  });

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
