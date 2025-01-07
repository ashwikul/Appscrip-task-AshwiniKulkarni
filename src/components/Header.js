import React from "react";
import styles from "@/styles/Home.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <img src="/logo.svg" alt="appscrip logo" width={36} height={36} />
        <h1>LOGO</h1>
        <div className={styles.headerGroup}>
          <img src="/search.svg" alt="search" width={24} height={24} />

          <img src="/heart.svg" alt="heart" width={24} height={24} />

          <img src="/cart.svg" alt="cart" width={24} height={24} />

          <img src="/profile.svg" alt="profile" width={24} height={24} />

          <select>
            <option>Eng</option>
            <option>Hin</option>
          </select>
        </div>
      </div>
      <nav className={styles.navbar}>
        <div>SHOP</div>
        <div>SKILLS</div>
        <div>STORIES</div>
        <div>ABOUT</div>
        <div>CONTACT US</div>
      </nav>
    </div>
  );
}

export default Header;
