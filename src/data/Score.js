class Score {
  currScore = 0;
  maxScore = 0;

  constructor(curr = 0, max = 0) {
    this.currScore = curr;
    const localMax = localStorage.getItem("max");
    console.log(localMax);
    if (localMax) {
      this.maxScore = Number.parseInt(localMax);
    } else this.maxScore = max;
  }

  incrementScore() {
    ++this.currScore;
    this.maxScore = Math.max(this.currScore, this.maxScore);
    localStorage.setItem("max", this.maxScore);
  }

  resetScore() {
    this.currScore = 0;
  }

  setMax(max) {
    this.maxScore = max;
  }

  nIncrementScore() {
    const newObj = new Score(this.currScore, this.maxScore);
    newObj.incrementScore();
    return newObj;
  }

  nResetScore() {
    const newObj = new Score(this.currScore, this.maxScore);
    newObj.resetScore();
    return newObj;
  }

  nSetMax(max) {
    const newObj = new Score(this.currScore, this.maxScore);
    newObj.setMax(max);
    return newObj;
  }
}

export default Score;
