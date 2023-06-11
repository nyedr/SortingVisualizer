import SortingAlgorithmBtns from "./components/AlgorithmButtons";
import SortControl from "./components/SortControl";
import { useState, useEffect, useRef } from "react";
import { AppContainer, GlobalStyle, ContainerTitle } from "./AppStyles";
import useSortingVisualizer from "./hooks/useSortingVisualizer";
import useArray from "./hooks/useArray";
import AlgorithmData from "./components/AlgorithmData";

export enum Algorithm {
  BUBBLE = "BUBBLE",
  QUICK = "QUICK",
  MERGE = "MERGE"
}

export default function App() {
  const [algorithm, setAlgorithm] = useState<Algorithm>(Algorithm.BUBBLE);
  const [size, setSize] = useState(20);
  const [isSorted, setIsSorted] = useState(false);
  const { array, setArray, getRandomArray } = useArray({ size, setIsSorted });
  const [isSorting, setIsSorting] = useState(false);
  const [sortingSpeed, setSortingSpeed] = useState(99);
  const lengthInputRef = useRef<HTMLInputElement | null>(null);
  const [showData, setShowData] = useState(false);

  // Set array size
  useEffect(() => {
    if (!Array.isArray(getRandomArray)) getRandomArray();
    if (lengthInputRef.current != null) {
      lengthInputRef.current.value = "" + size;
    }
  }, [size]);

  const capitalizedAlgorithm =
    algorithm.slice(0, 1) + algorithm.slice(1).toLowerCase();

  const sortControlProps = {
    getRandomArray,
    lengthInputRef,
    setSize,
    setIsSorting,
    setSortingSpeed,
    isSorted,
    showData,
    setShowData
  };

  const useSortingVisualizerProps = {
    array,
    algorithm,
    isSorting,
    setArray,
    setIsSorting,
    sortingSpeed,
    setIsSorted
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <ContainerTitle>
        Sorting Algorithm Visualizer: {capitalizedAlgorithm}
      </ContainerTitle>
      <SortControl {...sortControlProps} />
      {useSortingVisualizer(useSortingVisualizerProps)}
      {showData && <AlgorithmData {...{ algorithm }} />}
      <SortingAlgorithmBtns {...{ setAlgorithm }} />
    </AppContainer>
  );
}
