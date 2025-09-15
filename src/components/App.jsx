import "../styles/reset.css";
import "../styles/App.css";

import "../api/pokemon.js";
import getPokemons from "../api/pokemon.js";
import { useEffect, useState } from "react";

function App() {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);

  const numPokes = 5;

  useEffect(() => {
    (async function getData() {
      const data = await getPokemons();
      console.log(data);
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
    <div className="pokemon" key={index}>
      <img
        className="sprite"
        src={data.sprites.front_default}
        alt="pokemon-sprite"
        height="100"
        width="100"
      />
      <div className="title">
        {data.name.slice(0, 1).toUpperCase() + data.name.slice(1)}
      </div>
    </div>
  ));
}

export default App;
