// @flow
import {getOptimizely} from '../utils';

export const useOptimizelyTrackEvent = (): Function => (
  eventName: string,
  tags: {[string]: any}
): boolean => {
  const optimizely = getOptimizely();
  if (!optimizely) {
    return false;
  }

  optimizely.push({
    type: 'event',
    eventName,
    tags,
  });
  return true;
};

export default useOptimizelyTrackEvent;
