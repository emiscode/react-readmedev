import { RdButton } from "readmedev-ds";
import "./Pedidos.css";

const Pedidos = () => {
  return (
    <section className="pedidos">
      <h1>Meus pedidos</h1>
      <div className="pedido_container">
        <ul>
          <li>
            Pedido: <strong>123</strong>
          </li>
          <li>
            Data do pedido: <strong>05/12/2022</strong>
          </li>
          <li>
            Valor total: <strong>R$ 29,90</strong>
          </li>
          <li>
            Entrega realizada em : <strong>06/12/2022</strong>
          </li>
        </ul>
        <RdButton text="Detalhes" />
      </div>
      <div className="pedido_container">
        <ul>
          <li>
            Pedido: <strong>123</strong>
          </li>
          <li>
            Data do pedido: <strong>05/12/2022</strong>
          </li>
          <li>
            Valor total: <strong>R$ 29,90</strong>
          </li>
          <li>
            Entrega realizada em : <strong>06/12/2022</strong>
          </li>
        </ul>
        <RdButton text="Detalhes" />
      </div>
      <div className="pedido_container">
        <ul>
          <li>
            Pedido: <strong>123</strong>
          </li>
          <li>
            Data do pedido: <strong>05/12/2022</strong>
          </li>
          <li>
            Valor total: <strong>R$ 29,90</strong>
          </li>
          <li>
            Entrega realizada em : <strong>06/12/2022</strong>
          </li>
        </ul>
        <RdButton text="Detalhes" />
      </div>
    </section>
  );
};

export default Pedidos;
