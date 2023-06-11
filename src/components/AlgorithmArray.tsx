import { useRef, useEffect, useState } from "react";
import {
  SortLine,
  SortLines
} from "./componentStyles/AlgoArrayStyles";
import { AnimationIndexes } from "../hooks/useSortingVisualizer";

type SortingLineProps = {
  num: number;
  arrLength: number;
  idx: number;
};

export type SortLinesComponentProps = {
  array: number[];
  currentLine?: {
    isSorting: boolean;
    lineData: AnimationIndexes;
  };
};

const AlgorithmArray = ({ array, currentLine }: SortLinesComponentProps) => {
  const componentLinesRef = useRef<HTMLDivElement | null>(null);
  const [, setWidth] = useState(0);

  const trackScreenWidth = () => {
    setWidth(componentLinesRef.current?.offsetWidth ?? 0);
  };

  useEffect(() => {
    window.addEventListener("resize", trackScreenWidth);

    return () => {
      return window.removeEventListener("resize", trackScreenWidth);
    };
  }, []);

  const SortLineComponent = ({ num, arrLength, idx }: SortingLineProps) => {
    const lineWidth =
      (componentLinesRef.current?.offsetWidth ?? 10) / arrLength;
    let lineHeight =
      (componentLinesRef.current?.offsetHeight ?? 300) / arrLength;

    const style: React.CSSProperties = {
      height: lineHeight * num,
      left: idx * lineWidth,
      width: lineWidth
    };

    const isLineSelected =
      !!currentLine?.isSorting &&
      currentLine?.lineData?.currentIndexes.includes(idx);

    const isPivot =
      !!currentLine?.isSorting && currentLine?.lineData.pivot === idx;

    const lineHue = isLineSelected
      ? currentLine?.lineData?.currentIndexes.indexOf(idx) * 100 + 50
      : 212;

    return (
      <SortLine {...{ lineHue, isPivot, style }}>
        {/* <SortLineNum>{num}</SortLineNum> */}
      </SortLine>
    );
  };

  return (
    <SortLines ref={componentLinesRef}>
      {array.map((num, idx, { length: arrLength }) => (
        <SortLineComponent
          key={idx}
          num={num}
          arrLength={arrLength}
          idx={idx}
        />
      ))}
    </SortLines>
  );
};

export default AlgorithmArray;
