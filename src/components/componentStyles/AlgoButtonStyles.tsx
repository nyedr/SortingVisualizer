import styled from "styled-components";

export const AlgoButton = styled.button<{ hue: number }>`
  background-color: hsl(${(props) => props.hue}, 88%, 70%);
  cursor: pointer;
  border: none;
  padding: 0.5em 1.2em;
  border-radius: 7px;
  color: white;
  font-weight: bold;
  transition: 0.325s ease-in-out;
  white-space: nowrap;
  flex-basis: 7.5rem;

  &:hover {
    transform: scale(1.05);
    background-color: hsl(${(props) => props.hue}, 88%, 60%);
  }
`;

export const AlgoBtnGroup = styled.div`
  display: flex;
  gap: 0.7rem;

  @media (max-width: 400px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
