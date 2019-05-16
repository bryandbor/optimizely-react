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

type CommonPage = {
  apiName: string,
  category: string,
  id: string,
  name: string,
  staticConditions: any[],
};

export type Page = {
  deactivationEnabled: boolean,
  tags: any[],
  undoOnDeactivation: boolean,
} & CommonPage;

export type PageState = {
  isActive: boolean,
  metadata: {},
  tags: any[],
} & CommonPage;

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

type CommonCampaign = {
  allExperiments: {
    id: string,
    name: string,
  }[],
  audiences: Audience[],
  campaignName: string,
  id: string,
  isActive: boolean,
  isInCampaignHoldback: boolean,
  variation: {
    id: string,
    name: string,
  },
  visitorRedirected: boolean,
};

export type Campaign = {
  experiments: {
    id: string,
    name: string,
  }[],
} & CommonCampaign;

export type CampaignState = {
  experiment: {
    id: string,
    name: string,
  },
  reason: any,
} & CommonCampaign;

export type CampaignDecision = {
  data: {
    decision: {
      experimentId: string,
      variationId: string,
    },
  },
};

export type OptimizelyVisitorT = {
  browserId: string,
  browserVersion: string,
  campaign: any,
  cookies: {[string]: any},
  currentTimestamp: number,
  customBehavior: any,
  device: string,
  device_type: string,
  events: any[],
  first_session: boolean,
  language: string,
  location: {
    city: string,
    continent: string,
    country: string,
    region: string,
  },
  offset: number,
  queryParams: {[string]: string},
  referrer?: string,
  source_type: string,
  visitorId: string,
};

export interface OptimizelyT {
  get: string => any;
  push: (any, any) => void;
}

export interface OptimizelyStateT {
  getActivationId: () => string;
  getActiveExperimentIds: () => string[];
  getCampaignStateLists: () => Campaign[];
  getCampaignStates: () => CampaignState[];
  getDecisionObject: ({}) => any;
  getDecisionString: ({}) => any;
  getExperimentStates: (?{isActive?: boolean}) => {[number]: Experiment};
  getPageStates: () => PageState[];
  getRedirectInfo: () => any;
  getVariationMap: () => {[number]: Variation};
  isGlobalHoldback: () => Boolean;
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
