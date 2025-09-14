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
      setJsonData(data);
      setLoading(false);
    })();
  });

  if (loading) return <div>Loading</div>;

  return jsonData.name;
}

export default App;
