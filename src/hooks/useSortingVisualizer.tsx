import { useState, useEffect } from "react";
import bubbleSort from "../sortingAlgorithms/BubbleSort";
import mergeSort from "../sortingAlgorithms/MergeSort";
import quickSort from "../sortingAlgorithms/QuickSort";
import AlgorithmArray from "../components/AlgorithmArray";
import { Algorithm } from "../App";
import { SortLinesComponentProps } from "../components/AlgorithmArray";
import { isEqual } from "../sortingAlgorithms/algoHelpers";

type AnimationsArray = {
  array: number[];
  indexes: number[];
  pivot?: number;
}[];

interface SortingVisualizerProps {
  array: number[];
  algorithm: Algorithm;
  isSorting: boolean;
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>;
  sortingSpeed: number;
  setIsSorted: React.Dispatch<React.SetStateAction<boolean>>;
}

export type AnimationIndexes = {
  currentIndexes: number[];
  pivot?: number;
};

const useSortingVisualizer = ({
  array,
  algorithm,
  isSorting,
  setArray,
  setIsSorting,
  sortingSpeed,
  setIsSorted
}: SortingVisualizerProps): JSX.Element => {
  const [currentIndexes, setCurrentIndexes] = useState<AnimationIndexes>({
    currentIndexes: []
  });
  const animationSpeed = (2000 / array.length) * ((100 - sortingSpeed) / 100);

  const handleAnimation = (animations: AnimationsArray, index = 0) => {
    if (animations[index] == null || !("indexes" in animations[index])) return;

    setCurrentIndexes({
      currentIndexes: animations[index].indexes,
      pivot: animations[index].pivot
    });

    const sortedArr = array.sort((a, b) => a - b);
    if (isEqual(animations[index].array, sortedArr)) {
      console.log("Animation Done");
      setIsSorted(true);
      setIsSorting(false);
    } else {
      setTimeout(() => handleAnimation(animations, index + 1), animationSpeed);
    }
    setArray(animations[index].array);
  };

  const startAnimation = () => {
    let newAnimationsArray: AnimationsArray = [];
    switch (algorithm) {
      case "BUBBLE":
        newAnimationsArray = bubbleSort(array) ?? [];
        break;
      case "MERGE":
        newAnimationsArray = mergeSort(array) ?? [];
        break;
      case "QUICK":
        newAnimationsArray = quickSort(array) ?? [];
        break;
      default:
        throw new Error(algorithm + " ais not a valid algorithm.");
    }

    handleAnimation(newAnimationsArray);
  };

  useEffect(() => {
    if (isSorting) {
      startAnimation();
    }
  }, [isSorting]);

  const algorithmArrayProps: SortLinesComponentProps = {
    array,
    currentLine: {
      isSorting,
      lineData: currentIndexes
    }
  };

  return <AlgorithmArray {...algorithmArrayProps} />;
};

export default useSortingVisualizer;
