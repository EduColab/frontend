"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

const University = ({ params }) => {
  const router = useRouter();
  const [career, setCareer] = useState({});
  const [courses, setCourses] = useState(null);
  const { id } = params;
  const fetchCareer = async () => {
    const res = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/programs/id/${id}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    ).then(async (response) => {
      setCareer(response.data);
    
    });
   
  };
  useEffect(() => {
    fetchCareer();
  }, []);
  console.log(career);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      
        <h1 className={styles.h1}>{career.name}</h1>
        <div className={styles.description}><p className={styles.p}>Detalles:</p><p className={styles.p}>{career.description}</p></div>

      </div>
    </div>
  );
};

export default University;
