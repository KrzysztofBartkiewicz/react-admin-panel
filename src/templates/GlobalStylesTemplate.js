import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import mainTheme from '../styles/themes/mainTheme';

const GlobalStylesTemplate = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default GlobalStylesTemplate;
