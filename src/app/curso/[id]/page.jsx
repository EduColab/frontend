"use client"
import axios from 'axios';
import React, {useState, useEffect} from 'react'

import styles from './styles.module.css'
const Curso = ({params}) => {
    const [curso, setCurso] = useState(null);
    const {id} = params
    const fetchCurso = async () => {
        const res = await axios(
          `${process.env.NEXT_PUBLIC_API_URL}/courses/id/${id}`,
          { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
        ).then(async (response) => {
          setCurso(response.data);
        });
        console.log(res);
      };
      useEffect(() => {
        fetchCurso();
      }, []);
      console.log(curso)
  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>{curso !== null ? curso.name : "..."}</h1>
        <div className={styles.description}><p className={styles.p}>Detalles:</p>{curso?.description}</div>
        <button className={styles.button}>Iniciar</button>
        </div>
  )
}

export default Curso