import {Link} from "react-router-dom";

function JobCars ({
    id,
    titulo,
    empresa,
    modelo,
    descricao,
    tags = [],
    imagem,
    icone = "💻",
}) {
    return (
        <article className="job-card reveal glass tilt">
            <div className="job-thumb">
                {imagem ? (
                    <img src={imagem} alt={titulo} />
                ) : ( 
                    <div cllassName="placehouder-thumb">
                        <span>{icone}</span>
                    </div>
                )};
            </div>

            <div clasName="job-card-header top-space-sm">
                <h3>{titulo}</h3>
                <span className="job-badge">{modelo}</span>
            </div>

            <p>
                <strong>Empresa:</strong> {empresa}
            </p>
            <p>{descricao}</p>

            <div className="tag-list">
                {tags.map((tag) => (
                    <span className="tag" key={tag}>
                        {tag}
                    </span>
                ))}
            </div>

            <Link to={`/vaga/${id}`} className="btn btn-primary btn-small">
            Ver vaga</Link>
        </article>
    );
}

export default JobCards;