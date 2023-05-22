import React from "react";
import styles from "./FormUploadCourse.module.css";

const FormUploadCourse = () => {
  return (
    <form
      action="/ruta-de-procesamiento"
      method="POST"
      enctype="multipart/form-data"
      className={styles.form_container}
    >
      <div>
        <label for="titulo">Título del curso:</label>
        <input
          classname={styles.form_inputs}
          type="text"
          id="titulo"
          name="titulo"
          required
        />
      </div>
      <div>
        <label for="descripcion">Descripción:</label>
        <textarea
          classname={styles.form_inputs}
          id="descripcion"
          name="descripcion"
          required
        ></textarea>
      </div>
      <div className={styles.archive}>
        <label for="archivo">Archivo del curso:</label>
        <input
          classname={styles.form_inputs}
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

export default FormUploadCourse;
