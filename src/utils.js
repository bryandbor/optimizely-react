// @flow
import type {
  OptimizelyStateT,
  OptimizelyDataT,
  Experiment,
  EventFilter,
  CampaignDecision,
} from './types';

import {get} from 'dotty';

declare var window: any;

export const isBrowser = (): boolean => typeof window !== 'undefined';

export const isOptimizelyLoaded = (): boolean =>
  isBrowser() &&
  typeof window['optimizely'] &&
  !Array.isArray(window.optimizely);

export const getOptimizely = (): any => {
  if (!isBrowser()) {
    throw new Error('Optimizely not found');
  }

  if (!window.optimizely) {
    window.optimizely = [];
  }

  return window.optimizely;
};

export const getIsOptimizelyInitialized = (): boolean => {
  const optimizely = getOptimizely();
  return optimizely && !Array.isArray(optimizely);
};

export const getOptimizelyData = (): ?OptimizelyDataT =>
  isOptimizelyLoaded() ? window.optimizely.get('data') : undefined;

export const getOptimizelyState = (): ?OptimizelyStateT =>
  isOptimizelyLoaded() ? window.optimizely.get('state') : undefined;

export const getExperimentById = (id): ?Experiment => {
  const state = getOptimizelyState();
  if (!state) {
    return null;
  }

  return state.getExperimentStates()[id] || null;
};

export const addEventListener = (filter: EventFilter, handler: Function) => {
  if (!isBrowser()) {
    return;
  }
  const optimizely = getOptimizely();
  optimizely.push({
    type: 'addListener',
    filter: {
      type: filter.type || 'lifecycle',
      name: filter.name,
    },
    handler,
  });
};

export const addOptimizelyActivatedListener = (callback: Function): void =>
  addEventListener({name: 'activated'}, callback);
export const addCampaignDecidedListener = (callback: Function): void =>
  addEventListener({name: 'campaignDecided'}, callback);

export const getVariationFromActiveExperiment = (
  experiment: Experiment
): string => get(experiment, 'variation.id');

export const getExperimentIdFromDecision = (
  campaignDecision: CampaignDecision
): string => get(campaignDecision, 'data.decision.experimentId');

export const getVariationIdFromDecision = (
  campaignDecision: CampaignDecision
): string => get(campaignDecision, 'data.decision.variationId');
