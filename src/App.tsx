import React from 'react';
import './App.css';

import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import { FlexBox } from './components/FlexBox';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <p>Hello world</p>

          <FlexBox>Making my portfolio</FlexBox>
        </header>
      </div>
    </ThemeProvider>
  );
}

export { App };
