import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <header className={styles.navbar}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? styles.active : "")}
                to="/active-stocks"
              >
                Active Stocks
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? styles.active : "")}
                to="/stock-search"
              >
                Stock Search
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? styles.active : "")}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
