// @flow
import React, {useState} from 'react';
import {getOptimizely, getIsOptimizelyInitialized} from '../utils';

export const useOptimizely = () => {
  const [count, setCount] = useState(0);

  if (!getIsOptimizelyInitialized()) {
    return null;
  }
  return getOptimizely();
};

export default useOptimizely;
