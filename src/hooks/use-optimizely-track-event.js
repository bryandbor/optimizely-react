// @flow
import {getOptimizely} from '../utils';

/**
 * React hook which returns a utility function for tracking events through Optimizely.
 * @returns {Function} Utility function which can be called to track an event in Optimizely including tags.
 */
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
