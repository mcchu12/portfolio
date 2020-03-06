import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './store';
import { theme } from './theme';
import { Routes } from './Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </ThemeProvider>
  );
}

export { App };
