import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const BasePage = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default BasePage;
