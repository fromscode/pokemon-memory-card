import "../styles/reset.css";
import "../styles/App.css";

import Game from "./Game";
import Scores from "./Scores";

import ScoreObj from "../data/ScoreObj";

import { useState } from "react";

function App() {
  const [Score, setScore] = useState(ScoreObj);

  return (
    <>
      <Scores score={Score} setScore={setScore} />
      <Game score={Score} setScore={setScore} />
    </>
  );
}

export default App;
