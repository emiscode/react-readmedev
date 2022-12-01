import "./Header.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import userIcon from "../../assets/user-icon.svg";
import loginIcon from "../../assets/login-icon.svg";

import ActionButton from "../ActionButton";
import ModalNewUser from "../ModalNewUser";
import { useState } from "react";
import ModalLogin from "../ModalLogin";

function Header() {
  const [modalNewUserOpen, setModalNewUserOpen] = useState(false);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);

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
          <li className="rd-menu-item-first">
            <a href="#!">Categorias</a>
            <ul className="rd-submenu">
              <li>
                <Link to="/">Front-end</Link>
              </li>
              <li>
                <Link to="/">Back-end</Link>
              </li>
              <li className="rd-submenu-item-last">
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
              imgSrc={loginIcon}
              onClick={() => setModalLoginOpen(true)}
            />
            <ModalLogin
              open={modalLoginOpen}
              onClose={() => setModalLoginOpen(false)}
              fallbackModalNewUser={() => setModalNewUserOpen(true)}
            />
          </li>
          <li>
            <ActionButton
              text="Cadastrar-se"
              altSrc="Icone representando um usuário"
              imgSrc={userIcon}
              onClick={() => setModalNewUserOpen(true)}
            />
            <ModalNewUser
              open={modalNewUserOpen}
              onClose={() => setModalNewUserOpen(false)}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
