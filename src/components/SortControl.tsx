import {
  SortControlContainer,
  ControlButton,
  LengthInput,
  ControlInputGroup,
  ControlBtnGroup,
  ControlRangeInputSection,
  DataToggleButton
} from "./componentStyles/SortControlStyles";

interface SortControlProps {
  getRandomArray: () => void;
  lengthInputRef: React.MutableRefObject<HTMLInputElement | null>;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>;
  setSortingSpeed: React.Dispatch<React.SetStateAction<number>>;
  isSorted: boolean;
  showData: boolean;
  setShowData: React.Dispatch<React.SetStateAction<boolean>>;
}

const SortControl = ({
  getRandomArray,
  lengthInputRef,
  setSize,
  setIsSorting,
  setSortingSpeed,
  isSorted,
  showData,
  setShowData
}: SortControlProps) => {
  const sortArray = () => {
    if (isSorted) {
      getRandomArray();
    }
    setIsSorting(true);
  };

  return (
    <SortControlContainer>
      <ControlInputGroup>
        <ControlRangeInputSection>
          <label htmlFor="sort-length">Size:</label>
          <LengthInput
            ref={lengthInputRef}
            onChange={(e) => setSize(+e.target.value)}
            type="range"
            max={70}
            min={10}
            id="sort-length"
          />
        </ControlRangeInputSection>
        <ControlRangeInputSection>
          <label htmlFor="sort-speed">Speed:</label>
          <LengthInput
            onChange={(e) => setSortingSpeed(+e.target.value)}
            type="range"
            max={99}
            min={1}
            id="sort-speed"
          />
        </ControlRangeInputSection>
      </ControlInputGroup>
      <ControlBtnGroup>
        <ControlButton
          bg="hsl(27, 87%, 60%)"
          bgh="hsl(27, 87%, 50%)"
          onClick={() => !Array.isArray(getRandomArray) && getRandomArray()}
        >
          Shuffle
        </ControlButton>
        <ControlButton onClick={sortArray} bg="#999" bgh="#777">
          Sort
        </ControlButton>
        <DataToggleButton
          showData={showData}
          onClick={() => setShowData((prev) => !prev)}
        >
          Big O
        </DataToggleButton>
      </ControlBtnGroup>
    </SortControlContainer>
  );
};

export default SortControl;
