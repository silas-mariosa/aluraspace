import Banner from "../../componentes/Banner";
import Galeria from "../../componentes/Galeria";
import Cabecalho from "../../componentes/cabecalho";
import Menu from "../../componentes/menu";
import Rodape from "../../componentes/rodape";
import styles from './PaginaPrincipal.module.scss'

export default function PaginaInicial(){
    return(
        <>
        <Cabecalho/>
        <main>
        <section className={styles.principal}>
            <Menu/>
            <Banner/>
        </section>
        </main>
        <div className={styles.galeria}>
            <Galeria/>
        </div>
        <Rodape/>
        </>
    )
}