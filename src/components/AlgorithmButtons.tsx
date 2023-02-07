import { Algorithm } from "../App";
import { AlgoButton, AlgoBtnGroup } from "./componentStyles/AlgoButtonStyles";

const SortingAlgorithmsArray = ["Quick", "Bubble", "Merge"];

const SortingAlgorithmBtns = ({
  setAlgorithm
}: {
  setAlgorithm: (algo: Algorithm) => void;
}) => {
  const algoClick = (sortingAlgorithm: string) => {
    setAlgorithm(sortingAlgorithm.toUpperCase() as Algorithm);
  };

  const SortingAlgorithmBtn = ({
    sortingAlgorithm,
    index
  }: {
    sortingAlgorithm: string;
    index: number;
  }) => {
    const buttonHue = index * 100;
    return (
      <AlgoButton hue={buttonHue} onClick={() => algoClick(sortingAlgorithm)}>
        {`${sortingAlgorithm} Sort`}
      </AlgoButton>
    );
  };

  return (
    <AlgoBtnGroup>
      {SortingAlgorithmsArray.map((sort, i) => (
        <SortingAlgorithmBtn key={i} index={i} sortingAlgorithm={sort} />
      ))}
    </AlgoBtnGroup>
  );
};

export default SortingAlgorithmBtns;
