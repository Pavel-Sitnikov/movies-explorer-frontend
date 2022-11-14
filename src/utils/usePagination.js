import { useState } from "react";

import useWindowResize from "./useWindowResizing";

const usePagination = () => {
  const windowSize = useWindowResize();
  const [initValue, setInitValue] = useState(0);
  const [loadingLargerAmount, setLoadingLargerAmount] = useState(0);

  const calcInitValue = () => {
    if (windowSize.width >= 1280) {
      setInitValue(12);
      setLoadingLargerAmount(3);
    } else if (windowSize.width < 1280 && windowSize.width >= 768) {
      setInitValue(8);
      setLoadingLargerAmount(2);
    } else if (windowSize.width < 768 && windowSize.width >= 320) {
      setInitValue(5);
      setLoadingLargerAmount(2);
    }
  };

  const loadMore = () => {
    setInitValue((state) => state + loadingLargerAmount);
  };

  return {
    initValue,
    loadMore,
    calcInitValue,
  };
};

export default usePagination;
