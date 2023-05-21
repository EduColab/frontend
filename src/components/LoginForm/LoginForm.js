"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "./LoginForm.module.css";
import { LoginService } from "@/services/loginService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    
    e.preventDefault();
    // Lógica para enviar datos de login al servidor
    console.log("Email:", email);
    console.log("Password:", password);
    // Restablecer los campos del formulario
    setEmail("");
    setPassword("");
    const result  = await LoginService(email, password)
    console.log(result)
  };
  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <label htmlFor="email" className={styles.form_labels}>
        Correo:
      </label>
      <input
        className={styles.form_inputs}
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="example@gmail.com"
      />

      <label htmlFor="password" className={styles.form_labels}>
        Contraseña:
      </label>
      <input
        className={styles.form_inputs}
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="contraseña"
      />

      <button type="submit" className={styles.button}>
        Iniciar sesión
      </button>
      <p className={styles.no_account_link}>
        <Link href="/register">¿No tienes una cuenta?</Link>
      </p>
    </form>
  );
};

export default LoginForm;
