"use client";

import Nav from "@/components/navbar/Nav";
import React from "react";
import styles from "../../styles/community.module.css";
import Footer from "@/components/Footer/Footer";
import TopList from "@/components/TopList/TopList";
import { useState, useEffect } from "react";

const CommunityPage = () => {
  const [universities, setUniversities] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchDataUniversities = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/universities`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }

        let data = await response.json();
        data = data.splice(0,5);
        setUniversities(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataUniversities();
  }, []);

  useEffect(() => {
    const fetchDataCourses = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/courses`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }

        let data = await response.json();
        data = data.splice(0,5);
        setCourses(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataCourses();
  }, []);

  return (
    <section className={styles.section}>
      <Nav />
      <div className={styles.description}>
        <h2 className={styles.description_title}>Comunidad</h2>
        <p className={styles.description_text}>
          Las comunidades son lugares en los cuales puedes interactuar, conocer
          gente, obtener recomendaciones ver cursos, ver top de estudiantes,y
          más!. Conectate a una comunidad y empieza tu camino con tu carrera
          profesional.
        </p>
      </div>
      <div className={styles.main_box}>
        <TopList name={"Universidades"} list={universities} />
        <TopList name={"Cursos"} list={courses}/>
      </div>
      <Footer />
    </section>
  );
};

export default CommunityPage;
