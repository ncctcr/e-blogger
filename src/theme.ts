'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 10
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: 24
                }
            }
        },
        MuiCardContent: {
          styleOverrides: {
              root: {
                  padding: 24
              }
          }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: 24
                }
            }
        },
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    borderRadius: 10
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    zIndex: 2,
                }
            }
        }
    },
});

export default theme;