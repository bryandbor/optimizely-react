// @flow
import type {OptimizelyStateT} from '../type';

import {getOptimizely, getIsOptimizelyInitialized} from '../utils';

export const useOptimizelyState = (): OptimizelyStateT => {
  if (!getIsOptimizelyInitialized()) {
    return null;
  }
  return getOptimizely().get('state');
};

export default useOptimizelyState;
