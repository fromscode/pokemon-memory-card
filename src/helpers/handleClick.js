import randomizer from "./randomizer";

export default function handleClick(arr, index, score, setScore) {
  if (arr[index].hasBeenClicked) {
    console.log("failed");

    const newArr = arr.map((value) => {
      return { ...value, hasBeenClicked: false };
    });

    const newScore = score.nResetScore();
    setScore(newScore);
    return newArr;
  }

  const newScore = score.nIncrementScore();
  setScore(newScore);
  const newArr = randomizer(arr);
  newArr.forEach((value) => {
    if (arr[index].name === value.name) {
      value.hasBeenClicked = true;
    }
  });
  return newArr;
}
