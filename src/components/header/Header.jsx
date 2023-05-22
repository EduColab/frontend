"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import { chakra } from "@/app/fonts";
import { SearchBarList } from "../serchBarList/searchBarList.jsx";
import axios from "axios";
export const Header = () => {
  const [input, setinput] = useState("");
  const [results, setResults] = useState([]);
  const [tokenstorage, setTokenstorage] = useState("");
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tokenstorage = localStorage.getItem("token");
      setTokenstorage(tokenstorage);
    }
  }, [])
 
  const fetchApi = async (value) => {
    const res = await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/programs/options`, {
        headers: {
          Authorization: `Bearer ${tokenstorage}`,
        },
      })
      .then((response) => {
        const filtering = response.data.filter((program) => {
          return (
            value &&
            program &&
            program.name &&
            program.name.toLowerCase().includes(value)
          );
        });
        setResults(filtering)
      });
  };
  const handleChange = (value) => {
    setinput(value);
    fetchApi(value);
  };
  return (
    <div className={styles.header}>
      <h1 className={`${chakra.className} ${styles.h1}`}>
        Conecta con tu futura carrera profesional
      </h1>
      <div className={styles.pseudoInput}>
        <input
          className={styles.input}
          placeholder="Busca alguna universidad o carrera"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <SearchBarList results={results}/>
      </div>
      <div>
        <p className={styles.p}>
          Facilitamos la conexión con las universidades y
        </p>
        <p className={styles.p}>ayudarte en tu camino profesional.</p>
      </div>
    </div>
  );
};
