import React, { Component } from "react";

export default class SobreMim extends Component{
    render(){
        return (
            <section className="conteudo">
                <h1 className="conteudo__titulo">
                    Sobre mim
                </h1>
                <p className="conteudo__paragrafo">
                    Eu tenho 17 anos, estudei no
                    <strong className="titulo-destaque">
                        CEDUP Abílio Paulo
                    </strong>{" "}
                    onde fiz curso técnico em informática.
                </p>
                <p className="conteudo__paragrafo">
                    Desenvolvo websites abordando as áreas de frontend e backend e banco de dados.
                </p>
                <p className="conteudo__paragrafo">
                    Desde pequeno amo tecnologia, aos meus 13 anos eu entrei em
                    contato com programação e me apaixonei, e a partir dali
                    resolvi cursar o técnico no CEDUP, e estudar de forma autônoma. 
                    Já utilizai Pascal, Delphi, MySql e PHP mas atualmente estou com foco em JavaScript, 
                    estudando React, nodeJs, Express e suas nuanças!
                </p>
            </section>
        )
    }
}