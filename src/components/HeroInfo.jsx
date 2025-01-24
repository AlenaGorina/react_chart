import React from "react";

const HeroInfo = ({ hero }) => {
    return (
        <div>
            <h2>{hero.name}</h2>
            <img src={hero.url} alt={hero.name} style={{ width: "300px", height: "auto" }} />
            <p><strong>Альтер эго:</strong> {hero.alterego}</p>
            <p><strong>Профессия:</strong> {hero.occupation}</p>
            <p><strong>Друзья:</strong> {hero.friends}</p>
            <p><strong>Суперспособности:</strong> {hero.superpowers}</p>
            <p><strong>Информация:</strong> {hero.info}</p>
        </div>
    );
};

export default HeroInfo;