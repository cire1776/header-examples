import React from "react";
import { Link } from "gatsby";

export function createLink(title, link) {
  if (link.includes(":")) {
    return <a href={link}>{title}</a>;
  }

  return <Link to={link}>{title}</Link>;
}

export function generateSubmenu(submenu, classNames) {
  if (!submenu) {
    return;
  }

  return (
    <ul className={`submenu ${classNames}`} s>
      {submenu.map(([menu, link]) => {
        return <li>{createLink(menu, link)}</li>;
      })}
    </ul>
  );
}
