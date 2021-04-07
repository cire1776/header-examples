import React from "react";
import { createLink, generateSubmenu } from "./header_common";
import Hamburger from "./Hamburger";

import "./header4.scss";

function HeaderFour({ children, menus, socialMenu }) {
  return (
    <header className="header-4">
      <aside>{children}</aside>
      <Hamburger />
      <nav>
        <section className="menus">
          <ul className="main-menu">
            {Object.entries(menus).map(([menuItem, submenu]) => {
              return (
                <li className="main-item" key={menuItem}>
                  {menuItem}
                  {generateSubmenu(submenu)}
                </li>
              );
            })}
          </ul>
          <ul className="social-menu">
            {socialMenu.map(([menu, link]) => {
              return <li>{createLink(menu, link)}</li>;
            })}
          </ul>
        </section>
      </nav>
    </header>
  );
}
export default HeaderFour;
