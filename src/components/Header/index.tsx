import "./Header.css";
import { Link } from "react-router-dom";

import logo from "./assets/logo-min.svg";
import usuario from "./assets/usuario.svg";

import ActionButton from "../ActionButton";

function Header() {
  return (
    <header>
      <nav className="rd-navbar">
        <div className="rd-logo">
          <Link to="/" className="link">
            <img src={logo} alt="logo" />
            <h1>ReadmeDev</h1>
          </Link>
        </div>
        <ul className="rd-menu">
          <li>
            <a href="#!">Categorias</a>
            <ul className="rd-submenu">
              <li>
                <Link to="/">Front-end</Link>
              </li>
              <li>
                <Link to="/">Back-end</Link>
              </li>
              <li>
                <Link to="/">DevOps</Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="rd-actions">
          <li>
            <ActionButton
              text="Login"
              altSrc="Icone representando um usuário"
              imgSrc={usuario}
            />
          </li>
          <li>
            <ActionButton
              text="Cadastrar-se"
              altSrc="Icone representando um usuário"
              imgSrc={usuario}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;