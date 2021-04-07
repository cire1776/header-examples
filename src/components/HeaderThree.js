import React from "react";
import "./header3.scss";
import { createLink, generateSubmenu } from "./header_common";

function HeaderThree({ menus, specialItem, children }) {
  const [windowSize, setWindowSize] = React.useState(null);
  const menuElement = React.useRef(null);

  function toggleMenus(event) {
    menuElement.current.classList.toggle("shown");
  }

  React.useEffect(() => {}, [windowSize]);

  React.useEffect(() => {
    window.addEventListener("resize", detectWindowChange);

    return () => {
      window.removeEventListener("resize", detectWindowChange);
    };
  }, []);

  function detectWindowChange(event) {
    setWindowSize([window.innerWidth, window.innerHeight]);
  }

  return (
    <header className="header-3">
      {children}
      <nav>
        <i
          className="hamburger"
          onClick={toggleMenus}
          onKeyDown={toggleMenus}
          role="button"
          tabIndex={0}
        >
          <span className="top-bar"></span>
          <span className="middle-bar"></span>
          <span className="bottom-bar"></span>
        </i>
        <section className="menus" ref={menuElement}>
          <ul className="main-menu">
            {Object.entries(menus).map(([menuItem, submenu]) => {
              if (typeof submenu === "string") {
                return <li>{createLink(menuItem, submenu)}</li>;
              }

              return (
                <li className="main-item" key={menuItem}>
                  {menuItem}
                  {generateSubmenu(submenu, "bubbles")}
                </li>
              );
            })}
          </ul>
        </section>
      </nav>
    </header>
  );
}

export default HeaderThree;
