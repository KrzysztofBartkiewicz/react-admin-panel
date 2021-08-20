import { css } from 'styled-components';

const mainTheme = {
  colors: {
    text: '#272D3B',
    blueMenu: '#2D62ED',
    bluePrimary: '#00CCF2',
    blueLight: '#F4F7FE',
    pink: '#FF007C',
    velvet: '#7D00B5',
    grey: '#c3c3c3',
    white: '#fff',
  },

  fontSizes: {
    xs: '1.4rem',
    s: '1.6rem',
    l: '1.8rem',
    xl: '2rem',
    xxl: '2.6rem',
    xxxl: '3.6rem',
  },

  fontWeights: {
    regular: 400,
    semiBold: 600,
    bold: 700,
  },

  mixins: {
    views: css`
      flex-grow: 1;
      padding: 8rem 2rem 0 3rem;
      height: 100vh;
      overflow-y: auto;
    `,
  },
};

export default mainTheme;
