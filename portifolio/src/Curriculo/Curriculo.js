import React from "react"
import "./Curriculo.css"

export default function Curriculo({andamento, concluido}) {
    return (
        <main className="container curriculo">
            <h2 className="conteudo__titulo">Formações</h2>
            <p className="conteudo__paragrafo">
                Ensino Médio Técnico: CEDUP Abílio Paulo - Informática 2021 - 2023
                
            </p>
            <h2 className="conteudo__titulo">Cursos</h2>
            <h3 className="conteudo__subtitulo">Em andamento</h3>

            <ul className="lista em-andamento">{incorporaDados(andamento)}</ul>
            <h3 className="conteudo__subtitulo">Concluído</h3>

            <ul className="lista concluidos">{incorporaDados(concluido)}</ul>
        </main>
    )
}

function incorporaDados(dados) {
    return dados.map((curso) => {
        console.log(curso)
        return (
            <li className="lista_curriculo-item lista-item" key={curso.titulo} >
                <a
                    href={curso.link}
                    target="_blank"
                    rel="noreferrer"
                    className="card"
                >
                    <h4 className="card__titulo">{curso.titulo}</h4>
                    <img
                        src={curso.icone}
                        className="card_img"
                        alt={`Icone do curso ${curso.titulo}`}
                    ></img>
                </a>
            </li>
        )
    })
}
