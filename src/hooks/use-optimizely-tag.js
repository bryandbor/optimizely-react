// @flow
import {getOptimizely} from '../utils';

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
