import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "@/components/Header";
import Box from "@mui/material/Box";
import Providers from "@/providers";
import "./globals.css";

const RootLayout = (props: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
            <Providers>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Header/>
                <Box mt={2}>
                    {props.children}
                </Box>
            </Providers>
            </body>
        </html>
    );
}

export default RootLayout