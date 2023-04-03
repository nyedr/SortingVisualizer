import styled from "styled-components";

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #404040;
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`;

export const ComplexitiesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
`;

export const ComplexityTitle = styled.span`
  font-size: 1.3rem;
`;

export const ComplixtyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
