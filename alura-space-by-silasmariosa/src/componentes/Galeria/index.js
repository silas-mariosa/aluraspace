import React from "react";
import style from "./Galeria.module.scss";
import Tags from "../Tags";
import Fotos from "./fotos.json";
import favorito from "../../assets/favorito.png";
import open from "../../assets/open.png";

export default function Galeria() {
  return (
    <section className={style.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul className={style.galeria__lista}>
        {Fotos.map((foto) => {
          return (
            <li key={foto.id} className={style.galeria__card}>
              <img
                className={style.galeria__imagem}
                src={foto.imagem}
                alt={foto.titulo}
              />
              <p className={style.galeria__descricao}>{foto.titulo}</p>
              <div>
                <p>{foto.creditos}</p>
                <img src={favorito} alt="Ícone coração de curtida" />
                <img src={open} alt="Ícone de abrir modal" />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
