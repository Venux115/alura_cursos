import React, { Component } from "react"
import PropTypes from "prop-types"
import SobreMim from "../sobreMim/SobreMim"
import Home from "../Home/Home"
import "./Main.css"
// import Projetos from "../Projetos/Projetos"
// import Curriculo from "../Curriculo/Curriculo"
import fotoPerfil from "../assets/foto_perfil/foto_perfil.jpg"

export default class Main extends Component {
    render() {
        const { contexto } = this.props

        return (
            <main className="container">
                {contexto === "home" ? <Home /> : null}
                <img
                    className="img-fotoPerfil"
                    src={fotoPerfil}
                    alt="foto de perfil do Vinícius"
                />
                {contexto !== "home" ? <SobreMim /> : null}
            </main>
        )
    }
}

Main.propTypes = {
    contexto: PropTypes.string.isRequired,
}
