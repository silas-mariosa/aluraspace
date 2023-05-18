import React, { useState } from "react";
import styles from "./Galeria.module.scss";
import Tags from "../Tags";
import Cards from "../Galeria/Cards";
import fotos from "./fotos.json";

export default function Galeria() {
  const [Fotos, setFotos] = useState(fotos);
  const tags = [...new Set(fotos.map((valor)=> valor.tag))]

  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag;
    })

    setFotos(novasFotos);
  }
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtraFotos={filtraFotos} setItens={setFotos} />
      <Cards Fotos={Fotos} styles={styles}/>      
    </section>
  );
}
