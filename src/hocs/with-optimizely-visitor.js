// @flow
import React, {type ComponentType} from 'react';

import useOptimizelyVisitor from '../hooks/use-optimizely-visitor';

const defaultPropKey = 'optimizelyVisitor';
const defaultOptions = {
  propKey: defaultPropKey,
};
type WithOptimizelyOptions = {
  propKey: string,
};

/**
 * HOC which passes Optimizely visitor to the wrapped component
 * @param {{}} [options={}] Options for the HOC
 * @param {string} [options.propKey="optimizelyVisitor"] The key to be used for passing Optimizely visitor to the wrapped
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
      [propKey]: useOptimizelyVisitor(opts),
    }}
  />
);

export default withOptimizelyState;
