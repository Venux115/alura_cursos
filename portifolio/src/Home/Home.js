import React from "react"
import BotoesSociais from "../BotoesSociais/BotoesSociais"

export default function Home() {
    return (
        <section className="conteudo">
            <h1 className="conteudo__titulo">
                Olá, sou{" "}
                <strong className="titulo-destaque">
                    Vinícius de Araujo Goulart
                </strong>
            </h1>
            <p className="conteudo__paragrafo">
                Eu sou um desenvolvedor web iniciante, formado em Informática no {" "}<br></br>{" "}
                <strong className="titulo-destaque">CEDUP Abílio Paulo</strong>{" "}
                em Criciúma!
            </p>
            <BotoesSociais />
        </section>
    )
}
