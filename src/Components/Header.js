import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Acceuil</NavLink>
          </li>
          <li>
            <NavLink to="/coup-de-coeur">Coup de coeur</NavLink>
          </li>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </header>
  );
}

export default Header;
