import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import { Layout } from './components/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout></Layout>
    </ThemeProvider>
  );
}

export { App };
