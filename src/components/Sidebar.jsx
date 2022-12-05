import React, { useState } from "react";
import Navlinks from "./Navlinks";

export default function Sidebar() {
  const [toggleSidbar, setToggleSidebar] = useState(false);
  const [subcatToggle, setSubcatToggle] = useState(false);

  return (
    <>
      <div className={`sidebar-container ${toggleSidbar && "collapsed"}`}>
        <div
          onClick={() => {
            setToggleSidebar(!toggleSidbar);
            setSubcatToggle(false);
          }}
          className="hamburger-menu"
        >
          <div className="hamburger-lines"></div>
          <div className="hamburger-lines"></div>
          <div className="hamburger-lines"></div>
        </div>

        <Navlinks
          menu={toggleSidbar}
          setMenu={setToggleSidebar}
          subMenu={subcatToggle}
          setSubMenu={setSubcatToggle}
        />
      </div>
    </>
  );
}
