import { AnimationsArray } from "./algoHelpers";

const bubbleSort = (sortLineArray: number[]): AnimationsArray => {
  let animations = [];
  for (let i = 0; i < sortLineArray.length; i++) {
    for (let j = 0; j < sortLineArray.length - i - 1; j++) {
      let itemA = sortLineArray[j];
      let itemB = sortLineArray[j + 1];
      if (itemA > itemB) {
        let iter = sortLineArray[j];
        sortLineArray[j] = sortLineArray[j + 1];
        sortLineArray[j + 1] = iter;
        animations.push({ array: [...sortLineArray], indexes: [j, j + 1] });
      }
    }
  }
  return animations;
};

export default bubbleSort;
