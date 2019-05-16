// @flow
import {getOptimizely} from '../utils';

/**
 * React hook which grants the ability to add Optimizely tags to the current visitor
 * @returns {Function} Function which attempts to add tags to the Opimizely visitor. This function returns false if the
 * tags were unable to be added; true otherwise.
 */
export const useOptimizelyTag = (): Function => (tags: {
  [string]: string | number | boolean,
}): boolean => {
  const optimizely = getOptimizely();
  if (!optimizely) {
    return false;
  }

  optimizely.push({
    type: 'tags',
    tags,
  });
  return true;
};

export default useOptimizelyTag;
