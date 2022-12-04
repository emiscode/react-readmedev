import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BasePage from "../pages/BasePage";
import LoggedArea from "../pages/LoggedArea";
import Pedidos from "../pages/LoggedArea/Pedidos";

const RdRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BasePage />}>
        <Route path="/" element={<Home />} />
        <Route path="/minha-conta" element={<LoggedArea />}>
          <Route path="pedidos" element={<Pedidos />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RdRoutes;
