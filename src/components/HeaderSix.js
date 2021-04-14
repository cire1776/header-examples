import React from "react";
import "./header-6.scss";
import Hamburger, { Closeburger } from "../components/Hamburger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createLink } from "../components/header_common";

import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function HeaderSix({ menu, panes, children }) {
  const menuScreen = React.useRef(null);

  function toggleMenuScreen(event) {
    menuScreen.current.classList.toggle("open");
    return false;
  }

  function closeMenuScreen(event) {
    menuScreen.current.classList.remove("open");
    return false;
  }

  function toggleTarget(event) {
    event.target.classList.toggle("open");
  }

  function togglePane(event) {
    event.target.parentNode.classList.toggle("open");
  }

  function toggleSinglePane(event) {
    const openItem = event.target.parentNode.parentNode.querySelector(
      "header.header-6 li.open"
    );

    if (openItem) {
      openItem.classList.remove("open");
    }

    togglePane(event);
  }

  return (
    <>
      <section className="menu-screen header-6" ref={menuScreen}>
        <Closeburger action={closeMenuScreen} />
        <ul>
          {Object.entries(menu).map(([title, submenu]) => {
            return (
              <li
                role="presentation"
                className="pane-selector"
                onClick={toggleTarget}
              >
                {panes[title] ? (
                  <>
                    {title}
                    <span>
                      <FontAwesomeIcon
                        className="down"
                        icon={faChevronDown}
                        size="1x"
                      />
                      <FontAwesomeIcon
                        className="right"
                        icon={faChevronRight}
                        size="1x"
                      />
                    </span>
                    {panes[title]}
                  </>
                ) : (
                  createLink(title, menu[title])
                )}
              </li>
            );
          })}
        </ul>
      </section>
      <header className="header-6">
        {children}

        <nav>
          <Hamburger action={toggleMenuScreen} />
          <ul className="panes">
            {Object.entries(menu).map(([title, submenu]) => {
              return (
                <li key={title}>
                  <span role="presentation" onClick={toggleSinglePane}>
                    {title}
                  </span>
                  {panes[title]}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default HeaderSix;
