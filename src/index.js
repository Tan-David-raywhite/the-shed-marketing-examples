import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
