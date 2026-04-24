import {NavLink} from "react-router-dom";

function Sidebar() {
    retunr (
        <aside className="sidebar glass">
            <NavLink to="/" className="logo sidebar-logo">
            Conecta<span>Estágio</span>
            </NavLink>

            <nav className="sidebar-nav">
                <NavLink to="/dashboard">📊 Dashboard</NavLink>
                <NavLink to="/perfil">👤 Meu perfil</NavLink>
                <NavLink to="/vagas">💼 Vagas</NavLink>
                <NavLink to="/vaga/1">📄 Detalhe da vaga</NavLink>
                <NavLink to="/empresa">🏢 Empresa</NavLink>
                <Navlink to="/publicar-vaga">➕ Publicar vaga</Navlink>
            </nav>

            <div className="sidebar-box">
                <p className="sidebar-small">Status do perfil</p>
                <h3>0% completo</h3>

                <div className="progress=mini">
                    <span style={{width: "0%"}}></span>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;