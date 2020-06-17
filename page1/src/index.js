import React, { Suspense } from 'react';

const Sub = React.lazy(() => import('./sub'));
const Page1 = () => (
  <h1>
    This is Page1
    <hr />
    <Suspense fallback="loading...">
      <Sub />
    </Suspense>
  </h1>
);

export default Page1;
