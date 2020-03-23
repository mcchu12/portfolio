import React, { FC } from 'react';

import { NavBar } from '../components';

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <NavBar />

      <main>{children}</main>

      {/* <Background /> */}
    </div>
  );
};
