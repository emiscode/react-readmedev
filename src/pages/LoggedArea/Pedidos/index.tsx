import { useEffect, useState } from "react";
import { RdButton } from "readmedev-ds";
import { useGetToken } from "../../../hooks/token";
import { IPedido } from "../../../interfaces/IPedido";
import api from "../../../lib/axios";
import "./Pedidos.css";

const Pedidos = () => {
  const token = useGetToken();
  const [pedidos, setPedidos] = useState<IPedido[]>([]);

  const currencyFormatter = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    api(token)
      .get<IPedido[]>("pedidos")
      .then((response) => {
        setPedidos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  const remove = (pedido: IPedido) => {
    api(token)
      .delete(`pedidos/${pedido.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setPedidos(pedidos.filter((p) => p.id !== pedido.id));
      })
      .catch((erro) => console.log(erro));
  };

  return (
    <section className="pedidos">
      <h1>Meus pedidos</h1>
      {pedidos.map((pedido) => (
        <div className="pedido-container" key={pedido.id}>
          <ul>
            <li>
              Pedido: <strong>{pedido.id}</strong>
            </li>
            <li>
              Data do pedido:{" "}
              <strong>{new Date(pedido.data).toLocaleDateString()}</strong>
            </li>
            <li>
              Valor total:{" "}
              <strong>{currencyFormatter.format(pedido.total)}</strong>
            </li>
            <li>
              Entrega realizada em :{" "}
              <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong>
            </li>
            <li>
              <button className="btn-remove" onClick={() => remove(pedido)}>
                Excluir
              </button>
            </li>
          </ul>
          <RdButton text="Detalhes" />
        </div>
      ))}
    </section>
  );
};

export default Pedidos;
