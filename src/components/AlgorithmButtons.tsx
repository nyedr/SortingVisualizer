import { Dispatch, SetStateAction } from "react";
import { Algorithm } from "../App";
import { AlgoButton, AlgoBtnGroup } from "./componentStyles/AlgoButtonStyles";

const SortingAlgorithmsArray = [Algorithm.QUICK, Algorithm.BUBBLE, Algorithm.MERGE];

interface SortingAlgoBtnsProps {
  setAlgorithm: Dispatch<SetStateAction<Algorithm>>;
}

interface SortingAlgoBtnProps {
  algorithm: Algorithm;
  index: number;
}

const SortingAlgorithmBtns = ({ setAlgorithm }: SortingAlgoBtnsProps) => {
  const changeAlgo = (algorithm: Algorithm) => {
    setAlgorithm(algorithm);
  };

  const SortingAlgorithmBtn = ({ algorithm, index }: SortingAlgoBtnProps) => {
    const buttonHue = index * 100;
    const algorithmName = algorithm.slice(0, 1) + algorithm.slice(1).toLowerCase();
    return (
      <AlgoButton hue={buttonHue} onClick={() => changeAlgo(algorithm)}>
        {`${algorithmName} Sort`}
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
