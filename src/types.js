// @flow

export type Audience = {
  conditions: any,
  id: string,
  name: string,
};

export type Variation = {
  id: string,
  name: string,
};

export type Event = {
  apiName: string,
  category: string,
  eventType: string,
  id: string,
  name: string,
  pageId: string,
  viewId: string,
};

export type EventFilter = {
  type?: string,
  name: string,
};

export type Page = {
  apiName: string,
  category: string,
  deactivationEnabled: boolean,
  id: string,
  name: string,
  staticConditions: any,
  tags: any[],
  undoOnDeactivation: boolean,
};

export type Experiment = {
  audiences: Audience[],
  experimentName: string,
  id: string,
  isActive: boolean,
  isInExperimentHoldback: boolean,
  variation: {
    id: string,
    name: string,
  },
  visitorRedirected: boolean,
};

export type CampaignDecision = {
  data: {
    decision: {
      experimentId: string,
      variationId: string,
    },
  },
};

export interface OptimizelyStateT {
  getActivationId: () => string;
  getActiveExperimentIds: () => string[];
  getExperimentStates: (?{isActive?: boolean}) => {[number]: Experiment};
  getVariationMap: () => {[number]: Variation};
}

export type OptimizelyDataT = {
  accountId: string,
  audiences: {[number]: Audience},
  campaigns: {[number]: any},
  clientVersion: string,
  events: {[number]: Event},
  experiments: {[number]: Experiment},
  groups: {},
  pages: {[number]: Page},
  projectId: string,
  revision: string,
  snippetId: any,
  variations: {[number]: Variation},
};
