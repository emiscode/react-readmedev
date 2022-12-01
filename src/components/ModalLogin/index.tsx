import "./ModalLogin.css";

import { RdButton, RdInput, RdModal } from "readmedev-ds";
import { useState } from "react";
import axios from "axios";

interface PropsModalLogin {
  open: boolean;
  onClose: () => void;
  fallbackModalNewUser: () => void;
}

const ModalLogin = ({
  open,
  onClose,
  fallbackModalNewUser,
}: PropsModalLogin) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const usuario = {
      email: email,
      senha: password,
    };

    axios
      .post("http://localhost:8000/public/login", usuario)
      .then(() => {
        alert("Usuário autenticado com sucesso!");
        setEmail("");
        setPassword("");
        onClose();
      })
      .catch(() => {
        alert("OPS! Alguma coisa deu errado!");
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
