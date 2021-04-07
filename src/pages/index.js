import React from "react";

import mesh from "../images/pexels-photo-3636718.jpeg";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import HeaderThree from "../components/HeaderThree";
import logo from "../images/apmlogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const MENUS = {
  Domains: [
    ["Search", "/search"],
    ["Transfer", "/transfer"],
    ["Premium", "/premium"],
  ],
  "Website Builder": [
    ["Website Builder", "/website_builder"],
    ["Website Marketing", "/marketing"],
  ],
  Email: [
    ["Office 365", "office365"],
    ["Google Workspace", "/google_workspace"],
  ],
  "Web Hosting": [
    ["Website Hosting", "hosting"],
    ["WordPress Hosting", "/wordpress_hosting"],
  ],
  Security: [
    ["SSL Certificates", "/ssl_certificates"],
    ["Domain Privacy & Protection", "/domain_protection"],
    ["SiteLock Security", "/sitelock"],
  ],
};

const SECONDARY_MENU = [
  ["Help", "/help"],
  [<FontAwesomeIcon icon={faShoppingCart} />, "/shopping"],
  ["Login", "/login"],
];

const TERTIARY_MENU = [
  ["(800) 555-1212", "tel:8005551212"],
  ["Chat", "/chat"],
  ["Login", "/login"],
  ["Knowledge Base", "/knowledge_base"],
];
const SPECIAL = [<FontAwesomeIcon icon={faShoppingCart} size="2x" />, "/cart"];

const MENUS_2 = {
  About: "/about",
  "Our Services": [
    ["Window Washing", "/window_washing"],
    ["Laundry", "/laundry"],
    ["Dusting", "/dusting"],
  ],
  Pricing: "/pricing",
  "Contact Us": [
    ["E-Mail", "/email]"],
    ["Call us", "/call_us"],
  ],
};

const SOCIAL = [
  ["twitter", "https://twitter.com"],
  ["facebook", "https://facebook.com"],
  ["youtube", "https://youtube.com"],
];

// markup
const IndexPage = () => {
  return (
    <main>
      <section className="header-1">
        <h1>Header Example One</h1>
        <HeaderOne
          menus={MENUS}
          secondary={SECONDARY_MENU}
          tertiary={TERTIARY_MENU}
          special={SPECIAL}
        >
          <img src={logo} className="logo" alt="stylized pegasus" />
          <h1>
            Alpha-Pegasus <span>Media</span>
          </h1>
        </HeaderOne>
        <img src={mesh} alt="a view through a lattice window" />
      </section>

      <section className="header-2">
        <h1>Header Example Two</h1>
        <HeaderTwo menus={MENUS_2} socialMenus={SOCIAL}>
          <figure>
            <img src={logo} className="logo other" alt="stylized pegasus" />
            <h1>
              Alpha-Pegasus <br />
              <span>Media</span>
            </h1>
          </figure>
        </HeaderTwo>
        <img src={mesh} alt="a view through a lattice window" />
      </section>

      <section className="header-3">
        <h1>Header Example Three</h1>
        <HeaderThree menus={MENUS_2} specialItem={["Special", "/special"]}>
          <figure>
            <img src={logo} className="logo other" alt="stylized pegasus" />
            <h1>
              Alpha-Pegasus <br />
              Media
            </h1>
          </figure>
        </HeaderThree>
        <img src={mesh} alt="a view through a lattice window" />
      </section>
    </main>
  );
};

export default IndexPage;
