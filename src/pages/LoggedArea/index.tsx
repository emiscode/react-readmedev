import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import { useGetToken } from "../../hooks/token";
import "./LoggedArea.css";

const LoggedArea = () => {
  const token = useGetToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <>
      <Title text="Minha Conta" />
      <section className="logged_area__container">
        <div className="logged_area__menu">
          <ul className="logged_area__nav">
            <li>
              <Link to="/area-logada/pedidos" className="logged_area__link">
                Pedidos
              </Link>
            </li>
            <li>
              <Link to="/area-logada/trocas" className="logged_area__link">
                Trocas
              </Link>
            </li>
            <li>
              <Link to="/area-logada/cupons" className="logged_area__link">
                Cupons
              </Link>
            </li>
            <li>
              <Link to="/area-logada/dados" className="logged_area__link">
                Seus dados
              </Link>
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
