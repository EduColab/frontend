"use client";
import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
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
        <Link href="/login" className={styles.link}>Iniciar sesión</Link>
        <span>|</span>
        <Link href="/register" className={styles.link}>Registrate</Link>
      </div>
    </header>
  );
};

export default Nav;
