import Link from "next/link";
import style from "./CommunitySection.module.css";

const CommunitySection = () => {
  return (
    <section className={style.section}>
      <h2 className={style.title}>¿Estás dentro de alguna comunidad?</h2>
      <p className={style.phrase}>
        Puedes ingresar a la comunidad de tu escuela con tu sesión
      </p>
      <Link className={style.button} href="/login">
        Iniciar sesión
      </Link>
    </section>
  );
};

export default CommunitySection;
