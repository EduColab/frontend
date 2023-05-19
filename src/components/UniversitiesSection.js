import React from "react";
import styles from "./UniversitiesSection.module.css";
import Link from "next/link";

const UniversitiesSection = () => {
  return (
    <section className={styles.universities_section}>
      <div>
        <h2>Universidades</h2>
        <Link href="#">Ver todas</Link>
      </div>
      <div class={styles.carousel}>
        <div class={styles.carousel_item}>Item 1</div>
        <div class={styles.carousel_item}>Item 2</div>
        <div class={styles.carousel_item}>Item 3</div>
        <div class={styles.carousel_item}>Item 4</div>
        <div class={styles.carousel_item}>Item 5</div>
        <div class={styles.carousel_item}>Item 6</div>
        <div class={styles.carousel_item}>Item 7</div>
        <div class={styles.carousel_item}>Item 8</div>
      </div>
    </section>
  );
};

export default UniversitiesSection;
