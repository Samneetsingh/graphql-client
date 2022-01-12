import React, { lazy, Suspense } from 'react';

const LazyCourses = lazy(() => import('./Courses'));

const Courses = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCourses {...props} />
  </Suspense>
);

export default Courses;
