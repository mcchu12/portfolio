import React, { FC } from 'react';

import { Intro } from './Intro';
import { Projects } from './Projects';

export const Landing: FC = () => {
  return (
    <div>
      <Intro />

      <Projects />
    </div>
  );
};
