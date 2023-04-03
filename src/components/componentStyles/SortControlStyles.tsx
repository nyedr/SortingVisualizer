import styled from "styled-components";

export const SortControlContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
`;

interface ControlButtonProps {
  bg: string;
  bgh: string;
}

export const ControlButton = styled.button<ControlButtonProps>`
  padding: 0.4em 1.3em;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  transition: 0.325s ease-in-out;
  background-color: ${(props) => props.bg};

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.bgh};
  }
`;

export const LengthInput = styled.input`
  padding: 3px;
  cursor: pointer;
`;

export const ControlInputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  flex-direction: column;

  & > label {
    font-size: 1.3rem;
  }
`;

export const ControlRangeInputSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const ControlBtnGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const DataToggleButton = styled.button<{ showData: boolean }>`
  box-shadow: ${(props) =>
    !props.showData
      ? "0px 0px rgba(0, 0, 0, 0.1)"
      : "inset 3px 3px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px #fff"};
  padding: 0.4em 1.3em;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.325s ease-in-out;
  font-size: 1.1rem;
  white-space: nowrap;
`;
