import { Dispatch, SetStateAction } from "react";
import { Algorithm } from "../App";
import { AlgoButton, AlgoBtnGroup } from "./componentStyles/AlgoButtonStyles";

const SortingAlgorithmsArray = [
  "Quick",
  "Bubble",
  "Merge"
];

interface SortingAlgoBtnsProps {
  setAlgorithm: Dispatch<SetStateAction<Algorithm>>;
}

interface SortingAlgoBtnProps {
  algorithm: string;
  index: number;
  setAlgorithm: Dispatch<SetStateAction<Algorithm>>;
}

const SortingAlgorithmBtn = ({ algorithm, index, setAlgorithm }: SortingAlgoBtnProps) => {
  const changeAlgo = (algorithm: string) => {
    switch(algorithm) {
      case "Quick":
        setAlgorithm(Algorithm.QUICK);
        return;
      case "Merge":
        setAlgorithm(Algorithm.MERGE);
        return;
      case "Bubble":
        setAlgorithm(Algorithm.BUBBLE);
        return;
      default:
        setAlgorithm(Algorithm.BUBBLE)
    }
  };

  const buttonHue = index * 100;
  return (
    <AlgoButton hue={buttonHue} onClick={() => changeAlgo(algorithm)}>
      {`${algorithm} Sort`}
    </AlgoButton>
  );
};

const SortingAlgorithmBtns = ({ setAlgorithm }: SortingAlgoBtnsProps) => {

  return (
    <AlgoBtnGroup>
      {SortingAlgorithmsArray.map((sort, idx) => (
        <SortingAlgorithmBtn setAlgorithm={setAlgorithm} key={idx} index={idx} algorithm={sort} />
      ))}
    </AlgoBtnGroup>
  );
};

export default SortingAlgorithmBtns;
