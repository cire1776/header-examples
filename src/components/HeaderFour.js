import React from "react";
import { createLink, generateSubmenu } from "./header_common";
import Hamburger from "./Hamburger";

import "./header4.scss";

function HeaderFour({ children, menus, socialMenus }) {
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
        </section>
      </nav>
    </header>
  );
}
export default HeaderFour;
