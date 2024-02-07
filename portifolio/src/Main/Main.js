import React, { Component } from "react";
import BotoesSociais from "../BotoesSociais/BotoesSociais";
import "./Main.css";
import fotoPerfil from "../assets/foto_perfil/foto_perfil.jpg";
import PropTypes from "prop-types";
import imgCronometro from "../assets/projetos/cronometro.png"

export default class Main extends Component {
    render() {
        const { contexto } = this.props;

        let home = (
            <section className="conteudo">
                <h1 className="conteudo__titulo">
                    Olá, sou{" "}
                    <strong className="titulo-destaque">
                        Vinícius de Araujo Goulart
                    </strong>
                </h1>
                <p className="conteudo__paragrafo">
                    Eu tenho 17 anos e estou cursando Técnico de Informática no{" "}
                    <strong className="titulo-destaque">
                        CEDUP Abílio Paulo
                    </strong>{" "}
                    em Criciúma!
                </p>
                <BotoesSociais />
            </section>
        );

        let sobreMin = (
            <section className="conteudo">
                <h1 className="conteudo__titulo">
                    Olá, sou Vinícius de Araujo Goulart,
                </h1>
                <p className="conteudo__paragrafo">
                    Eu tenho 17 anos, estudo no
                    <strong className="titulo-destaque">
                        CEDUP Abílio Paulo
                    </strong>{" "}
                    onde faço técnico em informática.
                </p>
                <p className="conteudo__paragrafo">
                    Atualmente estou procurando emprego na área de
                    desenvolvimento de softwares, minha grande qualidade é
                    aprender rapidamente e absorver conhecimentos muito bem.
                </p>
                <p className="conteudo__paragrafo">
                    Desde pequeno amo tecnologia, aos meus 13 anos eu entrei em
                    contato com programação e me apaixonei, e a partir dali
                    resolvi cursar o técnico no CEDUP.
                </p>
            </section>
        );

        let jsx = (
            <main className="container">
                {contexto === "home" ? home : sobreMin}
                <img
                    className="img-fotoPerfil"
                    src={fotoPerfil}
                    alt="foto de perfil do Vinícius"
                />
            </main>
        );

        let curriculo = (
            <main className="container curriculo">
                <h2 className="conteudo__titulo">Formações</h2>
                <p className="conteudo__paragrafo">
                    Ensino Médio Técnico: CEDUP Abílio Paulo - Informática
                    (Conclusão prevista para 12/2023)
                </p>
                <h2 className="conteudo__titulo">Cursos</h2>
                <h3 className="conteudo__subtitulo">Em andamento</h3>

                <ul className="lista em-andamento">
                    <span>Carregando aguarde ...</span>
                </ul>
                <h3 className="conteudo__subtitulo">Concluído</h3>

                <ul className="lista concluidos">
                    <span>Carregando aguarde ...</span>
                </ul>
            </main>
        );

        let projetos = (
            <main class="container">
                <section class="conteudo">
                    <h1 class="conteudo__titulo">Projetos:</h1>
                    <h2 class="constainer__main__conteudo_subtitulo">
                        HTML e CSS:
                    </h2>
                    <ul class="lista lista-projeto">
                        <li class="lista-item lista-projeto__item">
                            <a
                                class="lista-projeto__item__card"
                                href="https://cronometro-neon.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    class="projeto__card__img"
                                    src={imgCronometro}
                                    alt="Foto do projeto"
                                />
                                <div class="projeto__card__body">
                                    <h4 class="projeto__card__titulo">
                                        Cronômetro
                                    </h4>
                                    <button class="projeto__card__icone">
                                        <i class="bi bi-github"></i>
                                    </button>
                                </div>
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        );

        if (contexto === "home" || contexto === "sobreMim") {
            return jsx;
        } else {
            if (contexto === "curriculo") {
                return curriculo;
            } else {
                return projetos;
            }
        }
    }
}

Main.propTypes = {
    contexto: PropTypes.string.isRequired,
};
