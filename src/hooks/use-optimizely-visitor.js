// @flow
import {getOptimizely, getIsOptimizelyInitialized} from '../utils';

export const useOptimizelyVisitor = (): Function => () => {
  if (!getIsOptimizelyInitialized()) {
    return null;
  }
  return getOptimizely().get('visitor');
};

export default useOptimizelyVisitor;
