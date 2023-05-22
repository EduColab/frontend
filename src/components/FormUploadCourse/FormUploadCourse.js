import React from "react";
import styles from "./FormUploadCourse.module.css";
import dynamic from "next/dynamic";


const FormUploadCourse = () => {
  return (
    <form
      action="/ruta-de-procesamiento"
      method="POST"
      encType="multipart/form-data"
      className={styles.form_container}
    >
      <div>
        <label htmlFor="titulo">Título del curso:</label>
        <input
          className={styles.form_inputs}
          type="text"
          id="titulo"
          name="titulo"
          required
        />
      </div>
      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          className={styles.form_inputs}
          id="descripcion"
          name="descripcion"
          required
        ></textarea>
      </div>
      <div className={styles.archive}>
        <label htmlFor="archivo">Archivo del curso:</label>
        <input
          className={styles.form_inputs}
          type="file"
          id="archivo"
          name="archivo"
          accept=".pdf,.doc,.docx"
          required
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