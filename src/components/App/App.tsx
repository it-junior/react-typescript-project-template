import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './App.styled';
import { theme } from '../../styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      Hello world!
      <GlobalStyle />
    </ThemeProvider>
  );
};
