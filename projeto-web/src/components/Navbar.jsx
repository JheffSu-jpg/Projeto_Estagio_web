import {Link, NavLink} from "react-router-dom";

function Navbar() {
    retunr (
        <header className="header">
            <nav className="navbar container">
                <Link to="/" className="logo">
                Conecta<span>Estágio</span>
                </Link>

                <ul className="nav-menu">
                    <li>
                        <NavLink to="/">Início</NavLink>
                    </li>

                    <li>
                        <NavLink to="/vagas">Vagas</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>

                    <li>
                        <NavLink to="/empresa">Empresa</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>

                    <li>
                        <NavLink to="/cadastro" className="nav-cta">Cadastrar</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;