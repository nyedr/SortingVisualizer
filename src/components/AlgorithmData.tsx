import { useState, useEffect } from "react";
import { Algorithm } from "../App";
import {
  DataContainer,
  ComplexitiesContainer,
  ComplexityTitle,
  ComplixtyContainer
} from "./componentStyles/AlgorithmDataStyles";

type BigONotation = {
  worstCase: string;
  averageCase: string;
};

type Complexity = {
  timeComplexity: BigONotation;
  spaceComplexity: BigONotation;
};

const AlgorithmData = ({ algorithm }: { algorithm: Algorithm }) => {
  const getAlgorithmComplexity = (algorithm: Algorithm): Complexity => {
    switch (algorithm) {
      case "BUBBLE":
        return {
          timeComplexity: { worstCase: "O(n^2)", averageCase: "O(n^2)" },
          spaceComplexity: { worstCase: "O(1)", averageCase: "O(1)" }
        };
      case "MERGE":
        return {
          timeComplexity: {
            worstCase: "O(n * log(n))",
            averageCase: "O(n * log(n))"
          },
          spaceComplexity: { worstCase: "O(n)", averageCase: "O(n)" }
        };
      case "QUICK":
        return {
          timeComplexity: { worstCase: "O(n^2)", averageCase: "O(n * log(n))" },
          spaceComplexity: { worstCase: "O(n)", averageCase: "O(log(n))" }
        };
    }
  };

  const [complexity, setComplexity] = useState<Complexity>(
    getAlgorithmComplexity(algorithm)
  );

  useEffect(() => {
    setComplexity(getAlgorithmComplexity(algorithm));
  }, [algorithm]);

  return (
    <DataContainer>
      <ComplixtyContainer>
        <ComplexityTitle>Time Complexity</ComplexityTitle>
        <ComplexitiesContainer>
          <span>Worst case: {complexity.timeComplexity.worstCase}</span>
          <span>Average case: {complexity.timeComplexity.averageCase}</span>
        </ComplexitiesContainer>
      </ComplixtyContainer>
      <ComplixtyContainer>
        <ComplexityTitle>Space Complexity</ComplexityTitle>
        <ComplexitiesContainer>
          <span>Worst case: {complexity.spaceComplexity.worstCase}</span>
          <span>Average case: {complexity.spaceComplexity.averageCase}</span>
        </ComplexitiesContainer>
      </ComplixtyContainer>
    </DataContainer>
  );
};

export default AlgorithmData;
