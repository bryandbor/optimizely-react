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
} from '../utils';

/**
 * Adds a listener for the activation of a specific Optimizely experiment.
 * @param {string} experimentId The experiment id for which the variant will be returned (if found/activated)
 * @param {Function} decisionCallback The callback to be called with variant information
 * @returns {Function} React hook to be called within a functional component
 */
export const useOptimizelyCampaignListener = (
  experimentId: string,
  decisionCallback: string => any
) => {
  React.useEffect(() => {
    let unsubFromActivatedCallback;
    let unsubFromCampaignCallback;

    // If optimizely has not yet initialized, set a listener for activation to check for active experiment
    if (!getIsOptimizelyInitialized()) {
      unsubFromActivatedCallback = addOptimizelyActivatedListener(() => {
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
    unsubFromCampaignCallback = addCampaignDecidedListener(
      (decision: CampaignDecision) => {
        if (getExperimentIdFromDecision(decision) === experimentId) {
          const existingExperiment = getExperimentById(experimentId);
          decisionCallback(
            getVariationFromActiveExperiment(existingExperiment)
          );
        }
      }
    );

    // Upon unmounting, unsubscribe from all Optimizely callbacks
    return () => {
      [unsubFromActivatedCallback, unsubFromCampaignCallback].forEach(
        unsub => unsub && unsub()
      );
    };
  }, [decisionCallback, experimentId]);
};

export default useOptimizelyCampaignListener;
