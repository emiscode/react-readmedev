import "./Header.css";
import logo from "./assets/logo-min.svg";

function Header() {
  return (
    <header className="rd-header">
      <img src={logo} className="rd-logo" alt="logo" />
      <h1>ReadmeDev</h1>
    </header>
  );
}

export default Header;
