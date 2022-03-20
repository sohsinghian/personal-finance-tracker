import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <header className={styles.navbar}>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/active-stocks">Active Stocks</Link>
            </li>
            <li>
              <Link to="/stock-search">Stock Search</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
