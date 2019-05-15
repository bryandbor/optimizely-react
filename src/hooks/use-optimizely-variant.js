// @flow
import {useState} from 'react';

import {getExperimentById} from '../utils';
import useOptimizelyCampaignListener from './use-optimizely-campaign-listener';

export const useOptimizelyVariant = (experimentId: string = ''): ?string => {
  const [variant, setVariant] = useState(getExperimentById(experimentId));

  useOptimizelyCampaignListener(experimentId, setVariant);

  return variant;
};

export default useOptimizelyVariant;
