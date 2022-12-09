import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";
import userIcon from "../../assets/user-icon.svg";
import loginIcon from "../../assets/login-icon.svg";

import ActionButton from "../ActionButton";
import ModalNewUser from "../ModalNewUser";
import { useState } from "react";
import ModalLogin from "../ModalLogin";
import { useGetToken } from "../../hooks/token";

function Header() {
  const [modalNewUserOpen, setModalNewUserOpen] = useState(false);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const token = useGetToken();
  const navigate = useNavigate();

  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(token != null);

  const onLogin = () => {
    setIsUserLoggedIn(true);
    setModalLoginOpen(false);
  };

  const onLogout = () => {
    setIsUserLoggedIn(false);
    sessionStorage.removeItem("token");
    navigate("/");
  };

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
          {!isUserLoggedIn && (
            <>
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
                  onLogin={onLogin}
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
            </>
          )}
          {isUserLoggedIn && (
            <>
              <li>
                <Link to="/minha-conta/pedidos">Minha conta</Link>
              </li>
              <li>
                <ActionButton
                  text="Sair"
                  altSrc="Icone representando um usuário"
                  imgSrc={userIcon}
                  onClick={() => onLogout()}
                />
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
