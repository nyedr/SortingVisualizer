import { Dispatch, SetStateAction } from "react";
import { Algorithm } from "../App";
import { AlgoButton, AlgoBtnGroup } from "./componentStyles/AlgoButtonStyles";

const SortingAlgorithmsArray = ["Quick", "Bubble", "Merge"];

interface SortingAlgoBtnsProps {
  setAlgorithm: Dispatch<SetStateAction<Algorithm>>;
}

interface SortingAlgoBtnProps {
  algorithm: string;
  // index: number;
}

const SortingAlgorithmBtns = ({ setAlgorithm }: SortingAlgoBtnsProps) => {
  const changeAlgo = (algorithm: string) => {
    setAlgorithm(algorithm.toUpperCase() as Algorithm);
  };

  const SortingAlgorithmBtn = ({ algorithm, index }: SortingAlgoBtnProps) => {
    const buttonHue = index * 100;
    return (
      <AlgoButton hue={buttonHue} onClick={() => changeAlgo(algorithm)}>
        {`${algorithm} Sort`}
      </AlgoButton>
    );
  };

  return (
    <AlgoBtnGroup>
      {SortingAlgorithmsArray.map((sort, idx) => (
        <SortingAlgorithmBtn key={idx} index={idx} algorithm={sort} />
      ))}
    </AlgoBtnGroup>
  );
};

export default SortingAlgorithmBtns;
