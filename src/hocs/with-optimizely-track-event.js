// @flow
import React, {type ComponentType} from 'react';

import useOptimizelyTrackEvent from '../hooks/use-optimizely-track-event';

const defaultPropKey = 'trackOptimizelyEvent';
const defaultOptions = {
  propKey: defaultPropKey,
};
type WithOptimizelyOptions = {
  propKey: string,
};

/**
 * HOC which passes a function for tracking Optimizely events
 * @param {{}} [options={}] Options for the HOC
 * @param {string} [options.propKey="trackOptimizelyEvent"] The key to be used for passing the utility function to the
 * wrapped component
 */
export const withOptimizelyTag = ({
  propKey = defaultPropKey,
  ...opts
}: WithOptimizelyOptions = defaultOptions) => (
  WrappedComponent: ComponentType
): ComponentType => (props: any) => (
  <WrappedComponent
    {...{
      ...props,
      [propKey]: useOptimizelyTrackEvent(opts),
    }}
  />
);

export default withOptimizelyTag;
