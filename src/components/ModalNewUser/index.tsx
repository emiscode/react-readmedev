import "./ModalNewUser.css";

import { RdButton, RdInput, RdModal } from "readmedev-ds";
import { useState } from "react";
import axios from "axios";

interface PropsModalNewUser {
  open: boolean;
  onClose: () => void;
}

const ModalNewUser = ({ open, onClose }: PropsModalNewUser) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addressPlus, setAddressPlus] = useState("");
  const [cep, setCep] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const usuario = {
      nome: name,
      email: email,
      senha: password,
      endereco: address,
      cep: cep,
      complemento: addressPlus,
    };

    axios
      .post("http://localhost:8000/public/registrar", usuario)
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        setName("");
        setEmail("");
        setAddress("");
        setAddressPlus("");
        setCep("");
        setPassword("");
        setConfirmPassword("");
        onClose();
      })
      .catch(() => {
        alert("OPS! Alguma coisa deu errado!");
      });
  };

  return (
    <RdModal title="Cadastro de Usuário" open={open} onClose={() => {}}>
      <div className="container-modal">
        <form onSubmit={onSubmitForm}>
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
