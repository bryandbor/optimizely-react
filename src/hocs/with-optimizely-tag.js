// @flow
import React, {type ComponentType} from 'react';

import useOptimizelyTag from '../hooks/use-optimizely-tag';

const defaultPropKey = 'addOptimizelyTag';
const defaultOptions = {
  propKey: defaultPropKey,
};
type WithOptimizelyOptions = {
  propKey: string,
};

/**
 * HOC which passes a function for adding Optimizely tags
 * @param {{}} [options={}] Options for the HOC
 * @param {string} [options.propKey="addOptimizelyTag"] The key to be used for passing the utility function to the
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
      [propKey]: useOptimizelyTag(opts),
    }}
  />
);

export default withOptimizelyTag;
