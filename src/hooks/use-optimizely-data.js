// @flow
import type {OptimizelyDataT} from '../type';

import {getOptimizelyData} from '../utils';

/**
 * Gets Optimizely data (if available)
 * @returns React hook to be called within a functional component. This hook will return the Optimizely data once
 * Optimizely activates.
 */
export const useOptimizelyData = (): ?OptimizelyDataT => getOptimizelyData();

export default useOptimizelyData;
