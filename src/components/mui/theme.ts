'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#134b70',
      dark: '#201e43',
    },
    secondary: {
      main: '#508c9b',
    },
    success: {
      main: '#67c090',
    },
    error: {
      main: '#ef4444',
    },
    warning: {
      main: '#f59e0b',
    },
  },
});
