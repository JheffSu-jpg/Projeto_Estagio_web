function FilterBar({
    area,
    setArea,
    modelo,
    setModelo,
    nivel,
    setNivel,
}) {
    return (
        <div className="filters reveal glass">
            <div className="filter-group">
                <label htmlFor="filtro-area">Área</label>
                <select id="filtro-area" value={area} onChange={(e) => setArea(e.target.value)}>
                    <option value="todos">Todas</option>
                    <option value="frontend">Front-End</option>
                    <option value="suporte">Suporte</option>
                    <option value="dados">Dados</option>
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="filtro-modelo">Modelo</label>
                <select id="filtro-modelo" value={modelo} onChange={(e) => setModelo(e.target.value)}>
                    <option value="todos">Todas</option>
                    <option value="remoto">Remoto</option>
                    <option value="hibrido">Híbrido</option>
                    <option value="presencial">Presencial</option>
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="filter-nivel">Nível</label>
                <select id="filtro-nivel" value={nivel} onChange={(e) => setNivel(e.target.value)}>
                    <option value="todos">Todos</option>
                    <option value="estagio">Estágio</option>
                    <option value="junior">Júnior</option>
                    <option value="trainee">Trainee</option>
                </select>
            </div>
        </div>
    );
}

export default FilterBar;