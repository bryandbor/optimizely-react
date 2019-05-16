// @flow
import React, {type ComponentType} from 'react';

import useOptimizelyState from '../hooks/use-optimizely-state';

const defaultPropKey = 'optimizelyState';
const defaultOptions = {
  propKey: defaultPropKey,
};
type WithOptimizelyOptions = {
  propKey: string,
};

/**
 * HOC which passes Optimizely state to the wrapped component
 * @param {{}} [options={}] Options for the HOC
 * @param {string} [options.propKey="optimizelyState"] The key to be used for passing Optimizely state to the wrapped
 * component
 */
export const withOptimizelyState = ({
  propKey = defaultPropKey,
  ...opts
}: WithOptimizelyOptions = defaultOptions) => (
  WrappedComponent: ComponentType
): ComponentType => (props: any) => (
  <WrappedComponent
    {...{
      ...props,
      [propKey]: useOptimizelyState(opts),
    }}
  />
);

export default withOptimizelyState;
