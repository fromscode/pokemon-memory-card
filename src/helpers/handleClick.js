import randomizer from "./randomizer";

export default function handleClick(arr, index, score, setScore) {
  if (arr[index].hasBeenClicked) {
    console.log("failed");
    arr.forEach((value) => {
      value.hasBeenClicked = false;
    });
    const newScore = score.nResetScore();
    setScore(newScore);
    return arr;
  }

  arr[index].hasBeenClicked = true;
  const newScore = score.nIncrementScore();
  setScore(newScore);
  return randomizer(arr);
}
