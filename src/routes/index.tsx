import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BasePage from "../pages/BasePage";

const RdRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BasePage />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default RdRoutes;