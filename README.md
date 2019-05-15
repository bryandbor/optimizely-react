# @bryandbor/optimizely-react

> Modern Optimizely integration with React

Simple integrations with Optimizely for React

[![NPM](https://img.shields.io/npm/v/@bryandbor/optimizely-react.svg)](https://www.npmjs.com/package/@bryandbor/optimizely-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Package Size](https://badgen.net/packagephobia/publish/@bryandbor/optimizely-react)](https://packagephobia.now.sh/result?p=%40bryandbor%optimizely-react) [![Weekly downloads](https://badgen.net/npm/dw/@bryandbor/optimizely-react)](https://www.npmjs.com/package/@bryandbor/optimizely-react)

## Install

```bash
npm install --save @bryandbor/optimizely-react
```

or

```bash
yarn add @bryandbor/optimizely-react
```

## Usage

```jsx
import React from 'react';

import VariationA from './tests/VariationA';
import VariationB from './tests/VariationB';
import VariationDefault from './tests/VariationDefault';

import {
  useOptimizelyVisitor,
  useOptimizelyTrackEvent,
  useOptimizelyVariant,
} from '@bryandbor/optimizely-react';

const experimentId = '1234567890';
export const OptimizelyVisitor = () => {
  const visitor = useOptimizelyVisitor();
  const greeting = `Hello ${visitor ? visitor.visitorId : 'Anonymous'}`;

  const variant = useOptimizelyVariant(experimentId);
  let ExperimentalContent;
  switch (variant) {
    case '45454545': // Variation id generated by Optimizely
      ExperimentalContent = VariationA;
      break;
    case '67676767': // Variation id generated by Optimizely
      ExperimentalContent = VariationB;
      break;
    default:
      ExperimentalContent = VariationDefault;
      break;
  }

  return (
    <div>
      <div>{greeting}</div>
      <div>
        <ExperimentalContent visitor={visitor} />
      </div>
    </div>
  );
};
```

## License

MIT © [bryandbor](https://github.com/bryandbor)
