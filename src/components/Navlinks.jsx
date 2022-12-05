import React from "react";
import { Link } from "react-router-dom";
import { navlink } from "../data";

export default function Navlinks(props) {
  const links = navlink.map((link, index) => {
    return (
      <li key={index}>
        <Link
          to={"#"}
          onClick={() => {
            props.setSubMenu(!props.subMenu);
          }}
        >
          <img
            src={link.imageSrc}
            alt={link.text}
            onClick={() => props.setMenu(false)}
          />
          {!props.menu && link.text}
        </Link>

        {props.subMenu &&
          link.subcat.map((subcatLink, index) => {
            return (
              <Link className="subcat-links" to={subcatLink.url} key={index}>
                {subcatLink.text}
              </Link>
            );
          })}
      </li>
    );
  });

  return (
    <>
      <nav>
        <ul>{links}</ul>
      </nav>
    </>
  );
}
