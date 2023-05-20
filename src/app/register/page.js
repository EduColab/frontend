import React from "react";
import styles from "../../styles/register.module.css";
import dynamic from "next/dynamic";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.login_box}>
        <h2 className={styles.title}>Registro</h2>
        <RegisterForm />
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(RegisterPage), { ssr: false });