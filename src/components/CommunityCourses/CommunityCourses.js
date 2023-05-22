import React from "react";
import styles from "./CommunityCourses.module.css";

const CommunityCourses = ({ id, name, description }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.course_title}>{name}</h2>
      <p className={styles.course_description}>{description}</p>
      {/* <figure className={styles.figure}>
        <img
          className={styles.image}
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
          alt="Descripción de la imagen"
          width={600}
          height={400}
        />
      </figure> */}
      {/* <h2 className={styles.user}>Hecho por persona</h2>
      <p className={styles.email}>Subido el asdasdasd</p> */}
      <button className={styles.button}>Agendar</button>
    </div>
  );
};

export default CommunityCourses;
