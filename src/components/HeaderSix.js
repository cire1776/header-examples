import React from "react";
import "./header-6.scss";
import Hamburger, { Closeburger } from "../components/Hamburger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createLink, generatePane } from "../components/header_common";

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

  function queryTarget(target) {
    return target.parentNode.parentNode.querySelector(
      `header.header-6 li.open`
    );
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
                key={title}
              >
                {panes[title] ? (
                  <>
                    {title}
                    <span>
                      <FontAwesomeIcon
                        className="down down-arrow"
                        icon={faChevronDown}
                        size="1x"
                      />
                      <FontAwesomeIcon
                        className="right right-arrow"
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
                  {generatePane(
                    title,
                    submenu,
                    "",
                    panes[title],
                    true,
                    queryTarget
                  )}
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
