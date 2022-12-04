import { Link, Outlet } from "react-router-dom";
import Title from "../../components/Title";
import "./LoggedArea.css";

const LoggedArea = () => {
  return (
    <>
      <Title text="Minha Conta" />
      <section className="logged_area__container">
        <div className="logged_area__menu">
          <ul className="logged-area__nav">
            <li>
              <Link to="/area-logada/pedidos">Pedidos</Link>
            </li>
            <li>
              <Link to="/area-logada/trocas">Trocas</Link>
            </li>
            <li>
              <Link to="/area-logada/cupons">Cupons</Link>
            </li>
            <li>
              <Link to="/area-logada/dados">Seus dados</Link>
            </li>
          </ul>
        </div>
        <div className="logged_area__content">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default LoggedArea;
