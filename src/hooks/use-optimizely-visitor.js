// @flow
import type {OptimizelyVisitorT} from '../types';

import {getOptimizely, getIsOptimizelyInitialized} from '../utils';

export const useOptimizelyVisitor = (): ?OptimizelyVisitorT => {
  if (!getIsOptimizelyInitialized()) {
    return null;
  }
  return getOptimizely().get('visitor');
};

export default useOptimizelyVisitor;
