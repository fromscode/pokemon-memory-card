import "../api/pokemon.js";
import getPokemons from "../api/pokemon.js";
import handleClick from "../helpers/handleClick.js";

import { useEffect, useState } from "react";

function Game({ score, setScore }) {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);

  const numPokes = 5;

  useEffect(() => {
    (async function getData() {
      const data = await getPokemons();
      setJsonData(data);
      setLoading(false);
    })();
  }, []);

  if (loading)
    return Array.from({ length: numPokes }).map((_, index) => (
      <div key={index} className="pokemon">
        Loading
      </div>
    ));

  return jsonData.map((data, index) => (
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
  ));
}

export default Game;
