import "../styles/reset.css";
import "../styles/App.css";

import Game from "./Game";
import Scores from "./Scores";

import Score from "../data/Score";

import { useState } from "react";

function App() {
  const [score, setScore] = useState(() => new Score());

  return (
    <>
      <Scores score={score} setScore={setScore} />
      <Game score={score} setScore={setScore} />
    </>
  );
}

export default App;
