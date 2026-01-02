import "../styles/App.css";

import "../api/pokemon.js";
import getPokemons from "../api/pokemon.js";
import handleClick from "../helpers/handleClick.js";

import { useEffect, useState } from "react";

function Game({ score, setScore }) {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isShuffling, setIsShuffling] = useState(false);

  const numPokes = 5;

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

  const onCardClick = (index) => {
    if (isShuffling) return;

    setIsShuffling(true);

    //flip all cards
    setTimeout(() => {
      const randomizedJsonData = handleClick(jsonData, index, score, setScore);
      setJsonData(randomizedJsonData);
    }, 300);

    // flip back
    setTimeout(() => {
      setIsShuffling(false);
    }, 600);
  };

  return (
    <div className="cards">
      {jsonData.map((data, index) => (
        <div
          className={`pokemon ${isShuffling ? "shuffling" : ""}`}
          key={index}
          onClick={() => onCardClick(index)}
        >
          <div className="pokemon-inner">
            <div className="pokemon-front">
              <img className="sprite" src={data.sprite} alt="pokemon-sprite" />
              <div className="title">{data.name.toUpperCase()}</div>
            </div>

            <div className="pokemon-back">?</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Game;
