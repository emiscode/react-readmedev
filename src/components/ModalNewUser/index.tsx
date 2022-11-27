import { RdInput, RdModal } from "readmedev-ds";
import loginImage from "./assets/login.png";
import { useState } from "react";

const ModalNewUser = () => {
  const [name, setName] = useState("");
  return (
    <RdModal title="Cadastrar" open={true} onClose={() => {}}>
      <figure>
        <img src={loginImage} alt="Monitor com formulário de cadastro" />
      </figure>
      <form action="">
        <RdInput
          label="Nome"
          value={name}
          onChange={setName}
          shadowEffect={false}
        />
      </form>
    </RdModal>
  );
};

export default ModalNewUser;
