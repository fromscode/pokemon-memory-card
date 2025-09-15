import "../styles/reset.css";
import "../styles/App.css";

import "../api/pokemon.js";
import getPokemons from "../api/pokemon.js";
import { useEffect, useState } from "react";

function App() {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function getData() {
      const data = await getPokemons();
      console.log(data);
      setJsonData(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <div className="pokemon">Loading</div>;

  return (
    <div className="pokemon">
      <img src={jsonData.sprites.front_default} alt="pokemon-sprite" />
      <div className="title">{jsonData.name}</div>
    </div>
  );
}

export default App;
