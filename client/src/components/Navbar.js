import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Blog App</div>
      <div className="links">
        <ul>
          <li className="list-items">
            <Link className="all-links" to="/?cat=art">
              ART
            </Link>
          </li>
          <li className="list-items">
            <Link className="all-links" to="/?cat=science">
              SCIENCE
            </Link>
          </li>
          <li className="list-items">
            <Link className="all-links" to="/?cat=technology">
              TECHNOLOGY
            </Link>
          </li>
          <li className="list-items">
            <Link className="all-links" to="/?cat=cinema">
              CINEMA
            </Link>
          </li>
          <li className="list-items">
            <Link className="all-links" to="/?cat=food">
              FOOD
            </Link>
          </li>
        </ul>
        <span>logout</span>
        <span>
          <Link className="all-links" to="/write">
            Write
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
