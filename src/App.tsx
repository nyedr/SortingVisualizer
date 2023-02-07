import SortingAlgorithmBtns from "./components/AlgorithmButtons";
import SortControl from "./components/SortControl";
import { useState, useEffect, useRef } from "react";
import { AppContainer, GlobalStyle, ContainerTitle } from "./AppStyles";
import useSortingVisualizer from "./hooks/useSortingVisualizer";
import useArray from "./hooks/useArray";

export type Algorithm = "BUBBLE" | "QUICK" | "MERGE";

export default function App() {
  const [algorithm, setAlgorithm] = useState<Algorithm>("BUBBLE");
  const [size, setSize] = useState(20);
  const [isSorted, setIsSorted] = useState(false);
  const { array, setArray, getRandomArray } = useArray({ size, setIsSorted });
  const [isSorting, setIsSorting] = useState(false);
  const [sortingSpeed, setSortingSpeed] = useState(99);
  const lengthInputRef = useRef<HTMLInputElement | null>(null);

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
    isSorted
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
      <SortingAlgorithmBtns {...{ setAlgorithm }} />
    </AppContainer>
  );
}
