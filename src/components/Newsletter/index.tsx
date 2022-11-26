import { RdInput } from "readmedev-ds";
import { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  return (
    <section className="newsletter">
      <div>
        <h6>Fique por dentro das novidades!</h6>
        <p>Atualizações de e-books, novos livros, promoções e outros.</p>
      </div>
      <form>
        <RdInput
          shadowEffect={true}
          value={email}
          onChange={setEmail}
          placeholder="Cadastre seu e-mail"
        />
      </form>
    </section>
  );
};

export default Newsletter;
