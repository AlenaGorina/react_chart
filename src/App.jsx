import React from "react";
import { heroesData } from "./data";
import HeroCard from "./components/HeroCard";

const App = () => {
  return (
    <div>
      <h1>Галерея Супер-героев</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {heroesData.map((hero) => (
                <div key={hero.name} style={{ margin: "20px" }}>
                  <HeroCard hero={hero} />
                </div>
        ))}
      </div>
    </div>
  );
};

export default App;
