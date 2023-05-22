"use client";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
const Nav = () => {
  const [username, setUsername] = useState("")
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const usernamestorage = localStorage.getItem("user")
      setUsername(usernamestorage);
    }
  }, [])
  console.log(username)
  return (
    <header className={styles.header}>
      <p className={styles.logo}>
        <Link href="/" className={styles.link}>
          EduColab
        </Link>
      </p>
      <nav className={styles.nav}>
        <Link href="/about" className={styles.link}>
          Nosotros
        </Link>
        <Link href="/community" className={styles.link}>
          Comunidad
        </Link>
        <Link href="/" className={styles.link}>
          Escuelas
        </Link>
      </nav>
      <div className={styles.logInfo}>
        {username ? (
          <p className={styles.link}>{username}</p>
        ) : (
          <Link href="/login" className={styles.link}>
            Iniciar sesión
          </Link>
        )}

        <span>|</span>
        {username ? (
          <p className={styles.link} onClick={()=>{
            localStorage.removeItem('user')
            window.location.href = "/";
          }}>cerrar sesión</p>
        ) : (
          <Link href="/register" className={styles.link}>
            Registrate
          </Link>
        )}
      </div>
    </header>
  );
};

export default Nav;
