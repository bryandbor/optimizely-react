// @flow
import {getOptimizely, getIsOptimizelyInitialized} from '../utils';

export const useOptimizelyData = (): Function => () => {
  if (!getIsOptimizelyInitialized()) {
    return null;
  }
  return getOptimizely().get('visitor');
};

export default useOptimizelyData;
