import React from "react";
import styles from "../../styles/NavBar.module.css";
function NavBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <h4>Short.url</h4>
      </div>
      <div className={styles.right}>
        <ul>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
        
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
}

export default NavBar;
