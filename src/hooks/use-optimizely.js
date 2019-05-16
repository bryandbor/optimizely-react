// @flow
import type {OptimizelyT} from '../types';

import {getOptimizely} from '../utils';

/**
 * React hook which returns the instance of Optimizely (if available)
 * @returns {{}} Optimizely instance (or null if unavailable)
 */
export const useOptimizely = (): ?OptimizelyT => getOptimizely();

export default useOptimizely;
