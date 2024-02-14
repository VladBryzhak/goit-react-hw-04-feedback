import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  weight: {
    accent: 600,
  },
  colors: {
    black: '#000000',
    accent: 'rgb(0 0 0 / 30%)',
  },
  border: '1px solid rgb(0 0 0 / 30%)',
  radius: '5px',
  shadow: 'rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px',
  transition: {
    standart:'250ms ease',},
  spasing: value => `${value * 2}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>
);