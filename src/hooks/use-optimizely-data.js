// @flow
import type {OptimizelyDataT} from '../type';

import {getOptimizely, getIsOptimizelyInitialized} from '../utils';

export const useOptimizelyData = (): OptimizelyDataT => {
  if (!getIsOptimizelyInitialized()) {
    return null;
  }
  return getOptimizely().get('data');
};

export default useOptimizelyData;
