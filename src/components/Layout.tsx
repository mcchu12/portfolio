import React, { FC } from 'react';

import { NavBar } from './NavBar';
import { Background } from './Background';
import { LerpContainer } from './LerpContainer';

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <NavBar />

      <LerpContainer component="main">{children}</LerpContainer>

      <Background />
    </div>
  );
};
