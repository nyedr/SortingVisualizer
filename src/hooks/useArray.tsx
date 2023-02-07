import { useState, useEffect } from "react";

type UseArrayProps = {
  size: number;
  setIsSorted: React.Dispatch<React.SetStateAction<boolean>>;
};

const useArray = ({ size, setIsSorted }: UseArrayProps) => {
  const [array, setArray] = useState<number[]>([]);

  const getRandomArray = () => {
    setIsSorted(false);
    const numbers = Array.from({ length: size }, (_, i) => i + 1);
    numbers.sort(() => Math.random() - 0.5);
    setArray(numbers);
  };

  useEffect(() => {
    getRandomArray();
  }, []);

  return { array, setArray, getRandomArray };
};

export default useArray;
