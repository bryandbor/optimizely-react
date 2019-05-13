// @flow
import {getOptimizely, getIsOptimizelyInitialized} from '../utils';

export const useOptimizelyState = (): Function => () => {
  if (!getIsOptimizelyInitialized()) {
    return null;
  }
  return getOptimizely().get('state');
};

export default useOptimizelyState;
