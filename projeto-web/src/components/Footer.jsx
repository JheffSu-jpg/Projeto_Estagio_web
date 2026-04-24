import {Link} from "react-router-dom";

function Footer () {
    return (
        <footer className="footer">
            <div className="containert footer-grid">
                <div>
                    <Link to="/" className="log footer-grid">
                    Conecta<span>Estágio</span>
                    </Link>
                    <p>Encontre oportunidades com mais clareza e dê o próximo passo na sua carreira.</p>
                </div>

                <div>
                    <h4>Navegação</h4>
                    <ul>
                        <li>
                            <Link to="/vagas">Vagas</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Linjk to="/perfil">Perfil</Linjk>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4>Empresa</h4>
                    <ul>
                        <li>
                            <Link to="/empresa">Painel</Link>
                        </li>
                        <li>
                            <Link to="/publicar-vaga">Pblicar vaga</Link>
                        </li>
                        <li>
                            <Link to="/vag/1">Detalhe da vaga</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Conecta Estágio. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;