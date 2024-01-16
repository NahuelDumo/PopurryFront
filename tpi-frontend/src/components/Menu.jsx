import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuItemClick = () => {
    setMenuVisible(false);
  };

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md">
      <div className="navbar-brand-container">
        <a className="navbar-brand">
          <i className="humble-lettering">POPURRI</i>
        </a>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleMenuClick}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${menuVisible ? "show" : ""}`} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/misiones"
              onClick={handleMenuItemClick}
            >
              Productos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
