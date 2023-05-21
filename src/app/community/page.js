import Nav from "@/components/navbar/Nav";
import React from "react";
import styles from "../../styles/community.module.css";
import Footer from "@/components/Footer/Footer";
import TopList from "@/components/TopList/TopList";

const CommunityPage = () => {
  

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
        <TopList name={"Universidades"}/>
        <TopList name={"Estudiantes"}/>
        <TopList name={"Cursos"}/>
      </div>
      <Footer />
    </section>
  );
};

export default CommunityPage;
