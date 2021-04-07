import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const LINK_ICONS = {
  twitter: <FontAwesomeIcon icon={faTwitter} size="1x" />,
  facebook: <FontAwesomeIcon icon={faFacebook} size="1x" />,
  youtube: <FontAwesomeIcon icon={faYoutube} size="1x" />,
};

export function createLink(title, link) {
  if (LINK_ICONS[title]) {
    title = LINK_ICONS[title];
  }

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
    <ul key="menu" className={`submenu ${classNames}`}>
      {submenu.map(([menu, link]) => {
        return <li>{createLink(menu, link)}</li>;
      })}
    </ul>
  );
}
