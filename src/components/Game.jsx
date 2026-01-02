import "../styles/App.css";

import "../api/pokemon.js";
import getPokemons from "../api/pokemon.js";
import handleClick from "../helpers/handleClick.js";

import { useEffect, useState } from "react";

function Game({ score, setScore }) {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);

  const numPokes = 20;

  useEffect(() => {
    (async function getData() {
      const data = await getPokemons(numPokes);
      setJsonData(data);
      setLoading(false);
    })();
  }, []);

  if (loading)
    return (
      <div className="cards">
        {Array.from({ length: numPokes }).map((_, index) => (
          <div key={index} className="pokemon">
            Loading
          </div>
        ))}
      </div>
    );

  return (
    <div className="cards">
      {jsonData.map((data, index) => (
        <div
          className="pokemon"
          key={index}
          onClick={() => {
            const randomizedJsonData = handleClick(
              jsonData,
              index,
              score,
              setScore,
            );
            setJsonData(randomizedJsonData);
          }}
        >
          <img
            className="sprite"
            src={data.sprite}
            alt="pokemon-sprite"
            height="100"
            width="100"
          />
          <div className="title">{data.name.toUpperCase()}</div>
        </div>
      ))}
    </div>
  );
}

export default Game;
