"use client"

import React from "react";
import { useState } from "react";
const RegisterForm = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Campo de nombre */}
      <label htmlFor="nombre" className={styles.form_labels}>Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        className={styles.form_inputs}
      />

      {/* Campo de correo electrónico */}
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

      {/* Campo de contraseña */}
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

      {/* Botón de enviar */}
      <button type="submit" className={styles.button}>Registrarse</button>
    </form>
  );
};

export default RegisterForm;
