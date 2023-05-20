"use client";

import React from "react";
import styles from "../../styles/login.module.css";
import dynamic from "next/dynamic";
import LoginForm from "@/components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.login_box}>
        <h1 className={styles.title}>Iniciar sesión</h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(LoginPage), { ssr: false });
