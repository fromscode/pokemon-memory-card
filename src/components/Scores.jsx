function Scores({ score }) {
  return (
    <div className="scores">
      Current Score: {score.currScore} Max Score: {score.maxScore}
    </div>
  );
}

export default Scores;
