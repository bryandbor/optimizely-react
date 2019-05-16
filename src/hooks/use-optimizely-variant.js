// @flow
import {useState} from 'react';

import {getExperimentById} from '../utils';
import useOptimizelyCampaignListener from './use-optimizely-campaign-listener';

/**
 * React hook which returns the variant of an Optimizely experiment. If the experiment is not immediately active,
 * this hook will listen for activation and return a variant once it becomes active
 * @param {string} experimentId The experiment id to monitor for variant
 * @returns {{}} variant The variant of the experiment chosen for the visitor; includes `id` and `name` (if available)
 */
export const useOptimizelyVariant = (experimentId: string = ''): ?string => {
  const [variant, setVariant] = useState(getExperimentById(experimentId));

  useOptimizelyCampaignListener(experimentId, setVariant);

  return variant;
};

export default useOptimizelyVariant;
