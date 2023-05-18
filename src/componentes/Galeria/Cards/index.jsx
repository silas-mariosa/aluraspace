import React from 'react'
import favorito from "../../../assets/favorito.png";
import open from "../../../assets/open.png";

export default function Cards({Fotos, styles}) {
  return (
    <ul className={styles.galeria__cards}>
        {Fotos.map((foto) => {
          return (
            <li key={foto.id} className={styles.galeria__card}>
              <img
                className={styles.galeria__imagem}
                src={foto.imagem}
                alt={foto.titulo}
              />
              <p className={styles.galeria__descricao}>{foto.titulo}</p>
              <div>
                <p>{foto.creditos}</p>
                <span>
                  <img src={favorito} alt="Ícone coração de curtida" />
                  <img src={open} alt="Ícone de abrir modal" />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
  )
}
