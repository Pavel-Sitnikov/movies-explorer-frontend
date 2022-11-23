import { useState } from "react";

import useWindowResize from "./useWindowResizing";

import {
  MAX_WINDOW_WIDTH,
  MEDIUM_WINDOW_WIDTH,
  MIN_WINDOW_WIDTH,
  MAX_RENDER_MOVIES,
  MEDIUM_RENDER_MOVIES,
  MIN_RENDER_MOVIES,
  MAX_ADD_NUMBER_OF_MOVIES,
  MIN_ADD_NUMBER_OF_MOVIES,
} from "../utils/constants";

const usePagination = () => {
  const windowSize = useWindowResize();
  const [initValue, setInitValue] = useState(0);
  const [loadingLargerAmount, setLoadingLargerAmount] = useState(0);

  const calcInitValue = () => {
    if (windowSize.width >= MAX_WINDOW_WIDTH) {
      setInitValue(MAX_RENDER_MOVIES);
      setLoadingLargerAmount(MAX_ADD_NUMBER_OF_MOVIES);
    } else if (
      windowSize.width < MAX_WINDOW_WIDTH &&
      windowSize.width >= MEDIUM_WINDOW_WIDTH
    ) {
      setInitValue(MEDIUM_RENDER_MOVIES);
      setLoadingLargerAmount(MIN_ADD_NUMBER_OF_MOVIES);
    } else if (
      windowSize.width < MEDIUM_WINDOW_WIDTH &&
      windowSize.width >= MIN_WINDOW_WIDTH
    ) {
      setInitValue(MIN_RENDER_MOVIES);
      setLoadingLargerAmount(MIN_ADD_NUMBER_OF_MOVIES);
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
