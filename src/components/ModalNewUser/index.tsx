import "./ModalNewUser.css";

import { RdButton, RdInput, RdModal } from "readmedev-ds";
import loginImage from "./assets/login.png";
import { useState } from "react";

const ModalNewUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addressPlus, setAddressPlus] = useState("");
  const [cep, setCep] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <RdModal title="Cadastro de Usuário" open={false} onClose={() => {}}>
      <div className="container-modal">
        <form action="">
          <RdInput
            label="Nome"
            value={name}
            onChange={setName}
            shadowEffect={false}
          />
          <RdInput
            label="E-mail"
            value={email}
            onChange={setEmail}
            shadowEffect={false}
          />
          <RdInput
            label="Endereço"
            value={address}
            onChange={setAddress}
            shadowEffect={false}
          />
          <RdInput
            label="Complemento"
            value={addressPlus}
            onChange={setAddressPlus}
            shadowEffect={false}
          />
          <RdInput
            label="CEP"
            value={cep}
            onChange={setCep}
            shadowEffect={false}
          />
          <RdInput
            label="Senha"
            type="password"
            value={password}
            onChange={setPassword}
            shadowEffect={false}
          />
          <RdInput
            label="Confirmar Senha"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            shadowEffect={false}
          />
          <footer>
            <RdButton text="Cadastrar" onClick={() => {}} btnType="secondary" />
          </footer>
        </form>
      </div>
    </RdModal>
  );
};

export default ModalNewUser;
