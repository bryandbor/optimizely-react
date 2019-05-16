// @flow
import type {OptimizelyStateT} from '../type';

import {getOptimizelyState} from '../utils';

/**
 * Gets Optimizely state (if available)
 * @returns React hook to be called within a functional component. This hook will return the Optimizely state once
 * Optimizely activates.
 */
export const useOptimizelyState = (): ?OptimizelyStateT => getOptimizelyState();

export default useOptimizelyState;
