import Banner from "componentes/Banner";
import styles from "./PaginaPrincipal.module.scss";

import Galeria from "componentes/Galeria";
import Populares from "componentes/Populares";
import Cabecalho from "componentes/cabecalho";
import Menu from "componentes/menu";
import Rodape from "componentes/rodape";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  );
}
