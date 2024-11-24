import { Link } from "react-router-dom";
import { BsBoxArrowRight, BsCalendar2Check, BsHouse, BsPeople, BsPersonPlus } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Header() {
  const { logout } = useContext(AuthContext);

  return (
    <header className="bg-dark text-white">
      <div className="container">
        <nav className="navbar navbar-expand navbar-dark">
          <Link to="/" className="navbar-brand">
            <h1></h1>
          </Link>
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <BsHouse className="me-2" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/usuarios-list" className="nav-link">
                <BsPeople className="me-2" /> Usuários
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/usuarios-form" className="nav-link">
                <BsPersonPlus className="me-2" /> Cadastrar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/agendamentos" className="nav-link">
                <BsCalendar2Check className="me-2" /> Agendamentos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" onClick={logout}>
                <BsBoxArrowRight className="me-2" /> Sair
              </Link>
            </li>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
