import logo from './logo.png'
import search from './search.png'

export default function Cabecalho(){
    return(
        <header>
            <img scr={logo} alt="Logo do Alura Space"/>
            <div>
                <input type="text"
                placeholder="O que você procura?"/>
                <img scr={search} alt="ícone de lupa"/>
            </div>
        </header>
    )
}