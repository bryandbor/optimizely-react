// @flow
import React from 'react';

import * as utils from '../../utils';

import useOptimizelyCampaignListener from '../use-optimizely-campaign-listener';

describe('Hooks | useOptimizelyCampaignListener', () => {
  let useEffect;
  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
  });
  afterEach(() => {
    useEffect.mockRestore();
  });

  const restoreMocks = (...mocks) => mocks.forEach(mock => mock.mockRestore());

  it('handles Optimizely not initialized', () => {
    const getIsOptimizelyInitialized = jest
      .spyOn(utils, 'getIsOptimizelyInitialized')
      .mockReturnValue(false);
    const addOptimizelyActivatedListener = jest
      .spyOn(utils, 'addOptimizelyActivatedListener')
      .mockImplementation(() => {});
    const getExperimentById = jest
      .spyOn(utils, 'getExperimentById')
      .mockReturnValue(null);
    const getExperimentIdFromDecision = jest
      .spyOn(utils, 'getExperimentIdFromDecision')
      .mockReturnValue(null);
    const getVariationFromActiveExperiment = jest
      .spyOn(utils, 'getVariationFromActiveExperiment')
      .mockReturnValue(null);
    const getVariationIdFromDecision = jest
      .spyOn(utils, 'getVariationIdFromDecision')
      .mockReturnValue(null);

    const experimentId = 'unique-experiment-id';
    const variationCallback = jest.fn();

    expect(() =>
      useOptimizelyCampaignListener(experimentId, variationCallback)
    ).not.toThrow();

    restoreMocks(
      getIsOptimizelyInitialized,
      addOptimizelyActivatedListener,
      getExperimentById,
      getExperimentIdFromDecision,
      getVariationFromActiveExperiment,
      getVariationIdFromDecision
    );
  });
});
