import React, { Component } from "react"
import axios from "axios"

import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"

export default class App extends Component {
    state = {
        contexto: "home",
    }

    // async componentDidMount() {
    //     this.requests = await this.carregaCurriculo()
    //     console.log(this.requests)
    // }

    render() {
        return (
            <>
                <Navbar
                    handleClickHome={this.handleClickHome}
                    handleClickSobreMim={this.handleClickSobreMim}
                    handleClickCurriculo={this.handleClickCurriculo}
                    handleClickProjetos={this.handleClickProjetos}
                />
                <Main contexto={this.state.contexto} requests={this.requests} />
                <Footer />
            </>
        )
    }

    async carregaCurriculo() {
        const linkProducao = "http://localhost:5000"
        const linkDeploy = "https://portifolio-jpn3.onrender.com"

        const result = []
        try {
            const resultadoAndamento = await axios(`${linkDeploy}/em-andamento`)
            const dadosAndamento = resultadoAndamento.data
            result.push(dadosAndamento)
        } catch (error) {
            console.error(`Ocorreu um erro! (<code>${error}</code>)`)
        }
        try {
            const resultadoConcluidos = await axios(`${linkProducao}/concluidos`)
            const dadosConcluidos = resultadoConcluidos.data
            result.push(dadosConcluidos)
        } catch (error) {
            console.error(`Ocorreu um erro! (<code>${error}</code>)`)
        }

        return result
    }

    handleClickHome = () => {
        this.setState({ contexto: "home" })
    }
    handleClickSobreMim = () => {
        this.setState({ contexto: "sobreMim" })
    }
    handleClickCurriculo = () => {
        this.setState({ contexto: "curriculo" })
    }
    handleClickProjetos = () => {
        this.setState({ contexto: "projetos" })
    }
}
