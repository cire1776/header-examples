import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import Hamburger from "./Hamburger";

import "./header2.scss";
import { createLink } from "./header_common";

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

  function generateSubmenu(submenu, classNames) {
    if (!submenu) {
      return;
    }
    return (
      <ul className={`submenu ${classNames}`}>
        {submenu.map(([menu, link]) => {
          return <li>{createLink(menu, link)}</li>;
        })}
      </ul>
    );
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
              if (typeof submenu === "string") {
                return <li key={menu}>{createLink(menu, submenu)}</li>;
              }

              return (
                <li key={menu}>
                  {menu}{" "}
                  {submenu ? (
                    <>
                      <FontAwesomeIcon
                        className="caret-right"
                        icon={faCaretRight}
                        size="1x"
                      />
                      <FontAwesomeIcon
                        className="caret-down"
                        icon={faCaretDown}
                        size="1x"
                      />
                    </>
                  ) : (
                    ""
                  )}
                  {generateSubmenu(submenu, "bubbles")}
                </li>
              );
            })}
          </ul>
          <ul className="social-menu">
            {socialMenus.map(([menuName, link]) => {
              return <li>{createLink(menuName, link)}</li>;
            })}
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default HeaderTwo;
