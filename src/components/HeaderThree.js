import React from "react";
import "./header3.scss";
import { createLink, generateSubmenu } from "./header_common";
import Hamburger from "./Hamburger";

function HeaderThree({ menus, specialItem, children }) {
  const [windowSize, setWindowSize] = React.useState(null);
  const menuElement = React.useRef(null);

  function toggleMenus(event) {
    menuElement.current.classList.toggle("shown");

    // always show hamburger not X
    return false;
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
        <Hamburger action={toggleMenus} />
        <section className="menus" ref={menuElement}>
          <ul className="main-menu">
            {Object.entries(menus).map(([menuItem, submenu]) => {
              if (typeof submenu === "string") {
                return (
                  <li key={`3-${menuItem}`}>{createLink(menuItem, submenu)}</li>
                );
              }

              return (
                <li className="main-item" key={`3-${menuItem}`}>
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
