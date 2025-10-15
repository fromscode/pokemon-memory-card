// Fisher–Yates (aka Knuth) Shuffle.
// from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export default function randomizer(arr) {
  const newArr = arr.map((value) => {
    return { ...value };
  });

  let currentIndex = newArr.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArr[currentIndex], newArr[randomIndex]] = [
      newArr[randomIndex],
      newArr[currentIndex],
    ];
  }

  return newArr;
}
