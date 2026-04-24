function StatsCard({valor, titulo, subtitulo, destaque = false}) {
    return (
        <article className={`panel glass stats-card ${destaque ? "stats-heghlight" : ""}`}>
            <h3>{valor}</h3>
            <p>{tirulo}</p>
            {subtitulo && <small>{subtitulo}</small>}
        </article>
    );
}

export default StatsCard;