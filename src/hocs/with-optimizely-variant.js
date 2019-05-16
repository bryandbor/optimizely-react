// @flow
import React, {type ComponentType} from 'react';

import useOptimizelyVariant from '../hooks/use-optimizely-variant';

const defaultPropKey = 'optimizelyVariant';
const defaultOptions = {
  propKey: defaultPropKey,
};
type WithOptimizelyOptions = {
  experimentId: string,
  propKey: string,
};

/**
 * HOC which passes the variant of the Optimizely experiment (if available)
 * @param {{}} options Options for the HOC
 * @param {string} options.experimentId The Optimizely experiment id to retrieve the variant id for
 * @param {string} [options.propKey="optimizelyVariant"] The key to be used for passing the variant to the
 * wrapped component
 */
export const withOptimizelyTag = ({
  experimentId,
  propKey = defaultPropKey,
  ...opts
}: WithOptimizelyOptions = defaultOptions) => (
  WrappedComponent: ComponentType
): ComponentType => (props: any) => (
  <WrappedComponent
    {...{
      ...props,
      [propKey]: useOptimizelyVariant(experimentId, opts),
    }}
  />
);

export default withOptimizelyTag;
