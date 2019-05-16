// @flow
import React, {type ComponentType} from 'react';

import useOptimizelyData from '../hooks/use-optimizely-data';

const defaultPropKey = 'optimizelyData';
const defaultOptions = {
  propKey: defaultPropKey,
};

type WithOptimizelyOptions = {
  propKey: string,
};

/**
 * HOC which passes Optimizely data to the wrapped component
 * @param {{}} [options={}] Options for the HOC
 * @param {string} [options.propKey="optimizelyData"] The key to be used for passing Optimizely data to the wrapped
 * component
 */
export const withOptimizelyData = ({
  propKey = defaultPropKey,
  ...opts
}: WithOptimizelyOptions = defaultOptions) => (
  WrappedComponent: ComponentType
): ComponentType => (props: any) => (
  <WrappedComponent
    {...{
      ...props,
      [propKey]: useOptimizelyData(opts),
    }}
  />
);

export default withOptimizelyData;
