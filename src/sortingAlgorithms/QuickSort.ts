import { removeDuplicates, AnimationsArray } from "./algoHelpers";

function quickSort(array: number[]): AnimationsArray {
  const animations: AnimationsArray = [];

  if (array.length <= 1) {
    return animations;
  }

  const partition = (low: number, high: number): number => {
    let pivotIndex = low;
    let pivotValue = array[low];
    animations.push({
      array: [...array],
      indexes: [low, pivotIndex],
      pivot: high
    });

    for (let i = low + 1; i <= high; i++) {
      animations.push({
        array: [...array],
        indexes: [i, pivotIndex],
        pivot: high
      });

      if (array[i] < pivotValue) {
        pivotIndex++;
        animations.push({
          array: [...array],
          indexes: [i, pivotIndex],
          pivot: high
        });
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        animations.push({
          array: [...array],
          indexes: [i, pivotIndex],
          pivot: high
        });
      }
    }

    [array[low], array[pivotIndex]] = [array[pivotIndex], array[low]];
    animations.push({
      array: [...array],
      indexes: [low, pivotIndex],
      pivot: high
    });
    return pivotIndex;
  };

  const sort = (low: number, high: number): void => {
    if (low < high) {
      const pivotIndex = partition(low, high);
      sort(low, pivotIndex);
      sort(pivotIndex + 1, high);
    }
  };

  sort(0, array.length - 1);
  return removeDuplicates(animations);
}

export default quickSort;
