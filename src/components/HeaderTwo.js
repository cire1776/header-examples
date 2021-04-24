import React, { useRef } from "react";

import Hamburger from "./Hamburger";

import "./header2.scss";
import { createLink, generateSubmenu, generateChevrons } from "./header_common";

const HeaderTwo = ({ menus, socialMenus, children }) => {
  const menuElement2 = useRef(null);

  React.useEffect(() => {
    window.addEventListener("resize", detectWindowChange);

    return () => {
      window.removeEventListener("resize", detectWindowChange);
    };
  }, []);

  function detectWindowChange(event) {
    menuElement2.current.classList.remove("shown");
  }

  function toggleMenus(event) {
    menuElement2.current.classList.toggle("shown");
    return menuElement2.current.classList.contains("shown");
  }

  return (
    <header className="header-2">
      {children}
      <nav>
        <Hamburger action={toggleMenus} />
        <section className="menus" ref={menuElement2}>
          <ul className="main-menu">
            {Object.entries(menus).map(([menu, submenu]) => {
              return (
                <li key={menu}>
                  {generateSubmenu(menu, submenu, "bubbles", false, () => {
                    return generateChevrons(true, true);
                  })}
                </li>
              );
            })}
          </ul>
          <ul className="social-menu">
            {socialMenus.map(([menuName, link]) => {
              return <li key={menuName}>{createLink(menuName, link)}</li>;
            })}
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default HeaderTwo;
