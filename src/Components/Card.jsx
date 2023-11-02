import React from "react";

const Card = ({name, pref}) => {
    return (
        <div className="card">
            <h2>Información del estudiante</h2>
            <p>😎 Nombre: {name}</p>
            <p>🐾 Animal favorito: {pref}</p>
        </div>
    )
};

export default Card;