// @flow
import React from 'react';

import type {CampaignDecision} from '../types';

import {
  getIsOptimizelyInitialized,
  addOptimizelyActivatedListener,
  addCampaignDecidedListener,
  getExperimentById,
  getVariationFromActiveExperiment,
  getExperimentIdFromDecision,
  getVariationIdFromDecision,
} from '../utils';

export const useOptimizelyCampaignListener = (
  experimentId: string,
  decisionCallback: string => any
) =>
  React.useEffect(() => {
    // If optimizely has not yet initialized, set a listener for activation to check for active experiment
    if (!getIsOptimizelyInitialized()) {
      addOptimizelyActivatedListener(() => {
        const existingExperiment = getExperimentById(experimentId);
        if (existingExperiment) {
          decisionCallback(
            getVariationFromActiveExperiment(existingExperiment)
          );
        }
      });

      // Otherwise, Optimizely has already initialized
    } else {
      // If the experiment is already active, fire callback with variation immediately
      const existingExperiment = getExperimentById(experimentId);
      if (existingExperiment) {
        return decisionCallback(
          getVariationFromActiveExperiment(existingExperiment)
        );
      }
    }

    // Otherwise, add listener for campaign decisions. Upon a campaign decision, check if the experiment id has been
    // has been decided; if so, fire the callback with the variation
    addCampaignDecidedListener((decision: CampaignDecision) => {
      if (getExperimentIdFromDecision(decision) === experimentId) {
        decisionCallback(getVariationIdFromDecision(decision));
      }
    });
  }, []);

export default useOptimizelyCampaignListener;
