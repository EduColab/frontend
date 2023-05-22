"use client"

import React from "react";
import { useState } from "react";
import styles from "./RegisterForm.module.css";
import Link from "next/link";
import {RegisterService} from "../../services/registerService"
const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí pueden agregar la lógica para enviar los datos del formulario al servidor
   
    const result = await RegisterService(email, password, username)
    console.log(result)
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Username*/}
      <label htmlFor="username" className={styles.form_labels}>Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className={styles.form_inputs}
        placeholder="username"
      />

      {/* Email */}
      <label htmlFor="email" className={styles.form_labels}>Correo electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={styles.form_inputs}
        placeholder="example@gmail.com"
      />

      {/* Password */}
      <label htmlFor="password" className={styles.form_labels}>Contraseña:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className={styles.form_inputs}
        placeholder="contraseña"
      />

      {/* Send button */}
      <button type="submit" className={styles.button}>Registrarse</button>
      <p className={styles.no_account_link}>
        <Link href="/login">¿Ya tienes una cuenta?</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
