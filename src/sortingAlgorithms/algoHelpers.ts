const sortedEntries = (obj: Object): [string, any][] => {
  return Object.entries(obj).sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  });
};

export const isEqual = (arrA: any[], arrB: any[]): boolean => {
  if (arrA.length !== arrB.length) return false;
  for (let i = 0; i < arrA.length; i++) {
    if (typeof arrA[i] !== typeof arrB[i]) return false;
    if (Object.prototype.toString.call(arrA[i]) === "" + {}) {
      if (!isEqual(sortedEntries(arrA[i]), sortedEntries(arrB[i]))) {
        return false;
      }
    } else if (Array.isArray(arrA[i])) {
      if (!isEqual(arrA[i], arrB[i])) return false;
    } else {
      if (arrA[i] !== arrB[i]) return false;
    }
  }
  return true;
};

export type AnimationsArray = {
  array: number[];
  indexes: number[];
  pivot?: number;
}[];

export function removeDuplicates(arr: AnimationsArray) {
  const dict = new Set();
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let currentElem = JSON.stringify(arr[i]);
    if (!dict.has(currentElem)) {
      result.push(arr[i]);
    }
    dict.add(currentElem);
  }
  return result;
}
