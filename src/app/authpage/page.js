"use client";

import React from "react";
import styles from "../../styles/login.module.css";
import dynamic from "next/dynamic";
import LoginForm from "@/components/LoginForm/LoginForm";

const AuthPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.login_box}>
        <h2 className={styles.title}>Iniciar sesión</h2>
        <LoginForm />
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(AuthPage), { ssr: false });
