import "./Navbar.css"
import { PropTypes } from "prop-types";
export default function Navbar({handleClickHome , handleClickSobreMim, handleClickCurriculo, handleClickProjetos}) {
    return (
        <header>
            <nav className="navbar">
                <button
                    type="button"
                    onClick={handleClickHome}
                    className="navbar__link"
                >
                    Home
                </button>
                <button
                    type="button"
                    onClick={handleClickSobreMim}
                    className="navbar__link"
                >
                    Sobre Mim
                </button>
                <button
                    type="button"
                    onClick={handleClickCurriculo}
                    className="navbar__link"
                >
                    Currículo
                </button>
                <button
                    type="button"
                    onClick={handleClickProjetos}
                    className="navbar__link"
                >
                    Projetos
                </button>
            </nav>
        </header>
    );
}

Navbar.propTypes = {
    handleClickHome: PropTypes.func.isRequired,
    handleClickSobreMim: PropTypes.func.isRequired,
    handleClickCurriculo: PropTypes.func.isRequired,
    handleClickProjetos: PropTypes.func.isRequired,
};