// @flow
import {useState} from 'react';

import useOptimizelyCampaignListener from './use-optimizely-campaign-listener';

export const useOptimizelyVariant = (experimentId: string = ''): ?string => {
  const [variant, setVariant] = useState(null);

  useOptimizelyCampaignListener(experimentId, setVariant);

  return variant;
};

export default useOptimizelyVariant;
