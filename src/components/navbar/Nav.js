"use client"
import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css"
const Nav = () => {
  return (
    
    <header className={styles.header}>
      <p className={styles.logo}>EduColab</p>
      <nav className={styles.nav}>
        <a>Nosotros</a>
        <a>Comunidad</a>
        <a>Escuelas</a>
      </nav>
      <div className={styles.logInfo}>
        <p>Iniciar sesión</p>
        <span>|</span>
        <p>Registrate</p>
      </div>
    </header>
  );
};

export default Nav;
