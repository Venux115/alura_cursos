import React, { Component } from "react";

import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

export default class App extends Component {
    state = {
        contexto: "home",
    };
    render() {
        const { contexto } = this.state;
        return (
            <>
                <Navbar
                    handleClickHome={this.handleClickHome}
                    handleClickSobreMim={this.handleClickSobreMim}
                    handleClickCurriculo={this.handleClickCurriculo}
                    handleClickProjetos={this.handleClickProjetos}
                />
                <Main 
                  contexto={this.state.contexto}
                />
                <Footer />
            </>
        );
    }

    handleClickHome = () => {
        this.setState({ contexto: "home" });
    };
    handleClickSobreMim = () => {
        this.setState({ contexto: "sobreMim" });
    };
    handleClickCurriculo = () => {
        this.setState({ contexto: "curriculo" });
    };
    handleClickProjetos = () => {
        this.setState({ contexto: "projetos" });
    };
}
