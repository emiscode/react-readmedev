import "./ModalLogin.css";

import { RdButton, RdInput, RdModal } from "readmedev-ds";
import { useState } from "react";
import axios from "axios";
import { useSaveToken } from "../../hooks/token";

interface PropsModalLogin {
  open: boolean;
  onClose: () => void;
  onLogin: () => void;
  fallbackModalNewUser: () => void;
}

const ModalLogin = ({
  open,
  onClose,
  onLogin,
  fallbackModalNewUser,
}: PropsModalLogin) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setToken = useSaveToken();

  const onSubmitForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const usuario = {
      email: email,
      senha: password,
    };

    axios
      .post("http://localhost:8000/public/login", usuario)
      .then((response) => {
        setToken(response.data.access_token);
        setEmail("");
        setPassword("");
        onLogin();
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          alert(err?.response?.data?.message);
        } else {
          alert("OPS! Alguma coisa deu errado!");
        }
      });
  };

  return (
    <RdModal title="Login de Usuário" open={open} onClose={onClose}>
      <div className="container-modal-login">
        <form onSubmit={onSubmitForm}>
          <RdInput
            label="E-mail"
            value={email}
            onChange={setEmail}
            shadowEffect={false}
          />
          <RdInput
            label="Senha"
            type="password"
            value={password}
            onChange={setPassword}
            shadowEffect={false}
          />
          <footer>
            <div>
              <RdButton text="Entrar" onClick={() => {}} btnType="secondary" />
            </div>
            <div className="container-register">
              <span>Ainda não tem um conta?</span>
              <RdButton
                text="Criar conta"
                onClick={() => {
                  onClose();
                  fallbackModalNewUser();
                }}
                btnType="secondary"
              />
            </div>
          </footer>
        </form>
      </div>
    </RdModal>
  );
};

export default ModalLogin;
