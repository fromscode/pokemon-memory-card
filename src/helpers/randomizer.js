// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export default function randomizer(arr) {
  const newArr = new Array(arr.length);
  const set = new Set();

  arr.forEach((value, index) => {
    let newIndex = getRandomInt(0, arr.length);
    while (set.has(newIndex) || newIndex == index) {
      newIndex = getRandomInt(0, arr.length);
    }
    newArr[newIndex] = value;
    set.add(newIndex);
  });

  return newArr;
}
