"use client";
import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
const Nav = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}><Link href="/" className={styles.link}>EduColab</Link></p>
      <nav className={styles.nav}>
        <Link href="/about" className={styles.link}>Nosotros</Link>
        <Link href="/community" className={styles.link}>Comunidad</Link>
        <Link href="/" className={styles.link}>Escuelas</Link>
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
