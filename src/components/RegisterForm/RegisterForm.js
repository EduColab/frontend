"use client"

import React from "react";
import { useState } from "react";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí pueden agregar la lógica para enviar los datos del formulario al servidor
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
      />

      {/* Send button */}
      <button type="submit" className={styles.button}>Registrarse</button>
    </form>
  );
};

export default RegisterForm;
