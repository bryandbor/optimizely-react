// @flow
import React from 'react';

import useOptimizelyCampaignListener from './use-optimizely-campaign-listener';

export const useOptimizelyVariant = (experimentId: string): ?string => {
  const [variant, setVarient] = React.useState(null);

  useOptimizelyCampaignListener(experimentId, setVarient);

  return variant;
};

export default useOptimizelyVariant;
