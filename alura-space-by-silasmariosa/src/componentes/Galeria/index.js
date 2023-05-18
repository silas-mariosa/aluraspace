import React from "react";
import styles from "./Galeria.module.scss";
import Tags from "../Tags";
import Cards from "../Galeria/Cards";
import Fotos from "./fotos.json";

export default function Galeria() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards Fotos={Fotos} styles={styles}/>      
    </section>
  );
}
