import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';




const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo_and_contacts}>
        <div className={styles.logo}>
          <div className={styles.links}>Educolab</div>
          <p>
            Transformamos la educación de nuestros países entrenando a la
            próxima generación de profesionales.
          </p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.contacts}>
          <ul>
            <li><Link className={styles.links} href="">Help</Link></li>
            <li><Link className={styles.links} href="">Your Account</Link></li>
            <li><Link className={styles.links} href="">Contact</Link></li>
            <li><Link className={styles.links} href="">Assistance</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.networks}>
        <Link className={styles.links} href=""><BsTwitter/></Link>
        <Link className={styles.links} href=""><BsFacebook/></Link>
        <Link className={styles.links} href=""><BsInstagram/></Link>
        <Link className={styles.links} href=""><BsYoutube/></Link>
      </div>
    </section>
  );
};

export default Footer;
