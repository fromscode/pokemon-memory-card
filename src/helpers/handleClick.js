import randomizer from "./randomizer";

export default function handleClick(arr, index) {
  if (arr[index].hasBeenClicked) {
    console.log("failed");
    return arr;
  }

  arr[index].hasBeenClicked = true;
  return randomizer(arr);
}
