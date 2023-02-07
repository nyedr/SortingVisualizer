import { AnimationsArray } from "./algoHelpers";

function merge(
  array: number[],
  start: number,
  mid: number,
  end: number,
  statesInOrder: AnimationsArray
) {
  let k = start,
    i = start,
    j = mid + 1;
  let pilesC = array.slice();
  while (i <= mid && j <= end) {
    if (pilesC[i] <= pilesC[j]) {
      array[k++] = pilesC[i++];
    } else {
      array[k++] = pilesC[j++];
    }
    const temp = { array: array.slice(), indexes: [i, j, k] };
    statesInOrder.push(temp);
  }
  while (i <= mid) {
    array[k++] = pilesC[i++];
    const temp = { array: array.slice(), indexes: [i, k] };
    statesInOrder.push(temp);
  }
  while (j <= end) {
    array[k++] = pilesC[j++];
    const temp = { array: array.slice(), indexes: [j, k] };
    statesInOrder.push(temp);
  }
}

function mergeSortHelper(
  array: number[],
  start: number,
  end: number,
  statesInOrder: AnimationsArray
) {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSortHelper(array, start, mid, statesInOrder);
  mergeSortHelper(array, mid + 1, end, statesInOrder);
  merge(array, start, mid, end, statesInOrder);
}

function mergeSort(array: number[]): AnimationsArray {
  let statesInOrder: AnimationsArray = [];
  mergeSortHelper(array, 0, array.length - 1, statesInOrder);
  return statesInOrder;
}

export default mergeSort;
