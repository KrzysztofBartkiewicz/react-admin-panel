import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import GlobalStyle from '../styles/global';
import mainTheme from '../styles/themes/mainTheme';
import materialTheme from '../styles/themes/materialTheme';

const GlobalStylesTemplate = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    <MaterialThemeProvider theme={materialTheme}>
      <GlobalStyle />
      {children}
    </MaterialThemeProvider>
  </ThemeProvider>
);

export default GlobalStylesTemplate;
