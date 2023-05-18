import React from "react";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a href="https://www.facebook.com/silas.mariosa"
            target="_blank"
            rel="noreferrer">
            <img src={Facebook} alt="Logo Facebook"/>
        </a>
        <a href="https://www.instagram.com/silasmariosa/"
            target="_blank"
            rel="noreferrer">
            <img src={Instagram} alt="Logo Instagram"/>
        </a>
        <a href="https://twitter.com/Silasmariosa"
            target="_blank"
            rel="noreferrer">
            <img src={Twitter} alt="Logo Twotter"/>
        </a>
      </div>
      <p>Desenvolvido por Silas Mariosa</p>
    </footer>
  );
}
