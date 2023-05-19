"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import { rubik } from "@/app/fonts";
export const Header = () => {
  const [input, setinput] = useState("");
  const handleChange = (value) => {
    setinput(value);
  };
  return (
    <div className={styles.header}>
      <h1 className={`${rubik.className} ${styles.h1}`}>
        Conecta con tu futura carrera profesional
      </h1>
      <div className={styles.pseudoInput}>
        <input
          className={styles.input}
          placeholder="Busca alguna universidad o carrera"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div>
        <p className={styles.p}>
          Facilitamos la conexión con las uiversidades y
        </p>
        <p className={styles.p}>ayudarte en tu camino profesional.</p>
      </div>
      
    </div>
  );
};
