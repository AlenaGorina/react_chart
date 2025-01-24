import React, { useState } from "react";
import HeroInfo from "./HeroInfo";
import Rating from "./Rating";

const HeroCard = ({ hero }) => {
    const [showInfo, setShowInfo] = useState(false);


    return (
        <div>
            <div onClick={() => setShowInfo(!showInfo)} style={{ cursor: "pointer" }}>
                <h2>{hero.name}</h2>
                <img src={hero.url} alt={hero.name} style={{ width: "150px", height: "auto" }} />
            </div>
            {showInfo && (
                <div>
                    <HeroInfo hero={hero} />
                    <Rating heroName={hero.name} />
                </div>
            )}
        </div>
    );
};

export default HeroCard;