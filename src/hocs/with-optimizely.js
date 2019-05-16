// @flow
import React, {type ComponentType} from 'react';

import useOptimizely from '../hooks/use-optimizely';

const defaultPropKey = 'optimizely';
const defaultOptions = {
  propKey: defaultPropKey,
};
type WithOptimizelyOptions = {
  propKey: string,
};

/**
 * HOC which passes Optimizely instance to the wrapped component
 * @param {{}} [options={}] Options for the HOC
 * @param {string} [options.propKey="optimizely"] The key to be used for passing Optimizely instance to the wrapped
 * component
 */
export const withOptimizely = ({
  propKey = defaultPropKey,
  ...opts
}: WithOptimizelyOptions = defaultOptions) => (
  WrappedComponent: ComponentType
): ComponentType => (props: any) => (
  <WrappedComponent
    {...{
      ...props,
      [propKey]: useOptimizely(opts),
    }}
  />
);

export default withOptimizely;
