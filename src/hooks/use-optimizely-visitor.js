// @flow
import type {OptimizelyVisitorT} from '../types';

import {getOptimizelyVisitor} from '../utils';

/**
 * Gets Optimizely visitor (if available)
 * @returns React hook to be called within a functional component. This hook will return the Optimizely visitor once
 * Optimizely activates.
 */
export const useOptimizelyVisitor = (): ?OptimizelyVisitorT =>
  getOptimizelyVisitor();

export default useOptimizelyVisitor;
