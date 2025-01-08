import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.desktopHidden}>
          <button className={styles.hamburger} onClick={toggleMenu}>
            <Image src="/hamburger.svg" alt="Menu" width={20} height={20} />
          </button>
          <Image src="/logo.svg" alt="Appscrip logo" width={20} height={20} />
        </div>

        <Image
          src="/logo.svg"
          alt="Appscrip logo"
          width={36}
          height={36}
          className={styles.mobileHidden}
        />
        <h1>LOGO</h1>
        <div className={`${styles.headerGroup} ${styles.mobileHidden}`}>
          <Image src="/search.svg" alt="search" width={24} height={24} />
          <Image src="/heart.svg" alt="heart" width={24} height={24} />
          <Image src="/cart.svg" alt="cart" width={24} height={24} />
          <Image src="/profile.svg" alt="Profile" width={24} height={24} />
          <select aria-label="Language Selector">
            <option value="eng">ENG</option>
            <option value="hin">HIN</option>
          </select>
        </div>
        <div className={` ${styles.desktopHidden}`}>
          <div className={styles.headerGroup}>
            <Image src="/search.svg" alt="search" width={20} height={20} />
            <Image src="/heart.svg" alt="heart" width={20} height={20} />
            <Image src="/cart.svg" alt="cart" width={20} height={20} />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <nav className={styles.navbarMobile}>
          <button onClick={toggleMenu}>X</button>
          <div>
            <a href="/shop">SHOP</a>
            <a href="/skills">SKILLS</a>
            <a href="/stories">STORIES</a>
            <a href="/about">ABOUT</a>
            <a href="/contactus">CONTACT US</a>
          </div>
        </nav>
      )}
      <nav className={`${styles.mobileHidden} ${styles.navbar}`}>
        <a href="/shop">SHOP</a>
        <a href="/skills">SKILLS</a>
        <a href="/stories">STORIES</a>
        <a href="/about">ABOUT</a>
        <a href="/contactus">CONTACT US</a>
      </nav>
    </div>
  );
}

export default Header;
