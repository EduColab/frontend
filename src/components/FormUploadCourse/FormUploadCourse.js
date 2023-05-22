import React from "react";
import styles from "./FormUploadCourse.module.css";
import dynamic from "next/dynamic";
import { postCourseService } from "@/services/postCourseService";
import { useState } from "react";

const FormUploadCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí pueden agregar la lógica para enviar los datos del formulario al servidor

    const result = await postCourseService(title, description);
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      <div>
        <label htmlFor="title">Título del curso:</label>
        <input
          className={styles.form_inputs}
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Escribe un titulo!"
        />
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <textarea
          className={styles.form_inputs}
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Escribe una descripción!"
        ></textarea>
      </div>
      <div className={styles.archive}>
        <label htmlFor="archive">Archivo del curso:</label>
        <input
          className={styles.form_inputs}
          type="file"
          id="archive"
          name="archive"
          accept=".pdf,.doc,.docx"
        />
      </div>
      {/* <div>
        <label for="imagen">Imagen del curso:</label>
        <input
          type="file"
          id="imagen"
          name="imagen"
          accept="image/*"
          required
        />
      </div> */}
      <div>
        <input type="submit" value="Subir curso" />
      </div>
    </form>
  );
};

export default dynamic(async () => await Promise.resolve(FormUploadCourse), {
  ssr: false,
});
