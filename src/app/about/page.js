import Nav from "@/components/navbar/Nav";
import React from "react";
import styles from "../../styles/about.module.css";
import Footer from "@/components/Footer/Footer";

const AboutPage = () => {
  return (
    <section className={styles.about_page}>
      <Nav />
      <div className={styles.main_content}>
        <div className={styles.title}>
          <h2>EDUCOLAB</h2>
        </div>
        <div className={styles.text_div}>
          <p>
            Bienvenido a nuestra plataforma Educolab, donde nos dedicamos a
            abordar uno de los mayores desafíos en el ámbito educativo: la
            deserción académica y la brecha que existe entre las universidades y
            la virtualidad. En línea con el ODS de Educación de Calidad, estamos
            comprometidos a brindar soluciones innovadoras que promuevan una
            educación inclusiva y equitativa para todos.
          </p>
          <p>
            En Educolab, creemos firmemente que cada estudiante merece tener
            acceso a una educación de calidad, independientemente de su
            ubicación geográfica o circunstancias personales. Reconocemos que la
            virtualidad puede ser una herramienta poderosa para superar las
            barreras tradicionales de tiempo y espacio en la educación.
          </p>
          <p>
            Nuestra plataforma se basa en la idea de aprovechar la tecnología
            para ofrecer a los estudiantes una experiencia educativa
            enriquecedora y flexible. Trabajamos en estrecha colaboración con
            universidades y educadores para desarrollar programas académicos
            sólidos que se adapten a las necesidades de los estudiantes de hoy.
            A través de nuestro enfoque innovador, buscamos prevenir la
            deserción académica.
          </p>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default AboutPage;
