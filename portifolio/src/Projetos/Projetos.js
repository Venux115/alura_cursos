import React from "react"
import imgCronometro from "../assets/projetos/cronometro.png"
import "./Projetos.css"

export default function Projetos() {
    return (
        <main className="container">
            <section className="conteudo">
                <h1 className="conteudo__titulo">Projetos:</h1>
                <h2>
                    HTML e CSS:
                </h2>
                <ul className="lista lista-projeto">
                    <li className="lista-item lista-projeto__item">
                        <a
                            className="lista-projeto__item__card"
                            href="https://cronometro-neon.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="projeto__card__img"
                                src={imgCronometro}
                                alt="Foto do projeto"
                            />
                            <div className="projeto__card__body">
                                <h4 className="projeto__card__titulo">
                                    Cronômetro
                                </h4>
                                <button className="projeto__card__icone">
                                    <i className="bi bi-github"></i>
                                </button>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    )
}
