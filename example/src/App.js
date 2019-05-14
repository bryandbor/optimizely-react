import React, {useState} from 'react';

import {useOptimizelyVariant} from '@bryandbor/react-optimizely-hooks';

const TestComponent = () => {
  const variant = useOptimizelyVariant('8389222516');
  return <div>Variant: {(variant && variant.id) || 'None'}</div>;
};

export const App = () => {
  const [unmounted, setUnmounted] = useState(false);

  return (
    <div onClick={() => setUnmounted(!unmounted)}>
      {unmounted ? <div>Not testing</div> : <TestComponent />}
    </div>
  );
};

export default App;
