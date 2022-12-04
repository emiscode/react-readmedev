import "./Footer.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import ActionButton from "../ActionButton";

function Footer() {
  return (
    <footer>
      <nav className="rd-navbar-footer">
        <div className="rd-logo-footer">
          <Link to="/" className="link-footer">
            <img src={logo} alt="logo" />
            <h1>ReadmeDev</h1>
          </Link>
        </div>
        <ul className="rd-copyright">
          <li>
            <ActionButton
              text={"© " + String(new Date().getFullYear())}
              altSrc=""
              imgSrc={""}
            />
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
