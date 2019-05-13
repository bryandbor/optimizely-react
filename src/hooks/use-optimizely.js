// @flow
import {getOptimizely, getIsOptimizelyInitialized} from '../utils';

export const useOptimizely = () => {
  if (getIsOptimizelyInitialized()) {
    return null;
  }
  return getOptimizely();
};

export default useOptimizely;
