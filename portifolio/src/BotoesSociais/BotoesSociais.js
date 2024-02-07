import { Component } from "react";
import "./BotoesSociais.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default class BotoesSociais extends Component {
    render() {
        return (
            <div className="botoesSociais">
                <h2 className="titulo">Acesse minhas redes.</h2>
                <a
                    className="botao"
                    href="https://www.instagram.com/azkeel.x/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                    Instagram
                </a>
                <a
                    className="botao"
                    href="https://github.com/Venux115"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faSquareGithub} />
                    Github
                </a>
                <a
                    className="botao"
                    href="https://www.linkedin.com/in/vin%C3%ADcius-goulart-359a87235/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                    LinkedIn
                </a>
            </div>
        );
    }
}
