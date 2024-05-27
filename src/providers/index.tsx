'use client'
import {SessionProvider} from "next-auth/react";
import StoreProvider from "@/providers/StoreProvider";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v14-appRouter";
import {ThemeProvider} from "@mui/material/styles";
import theme from "@/theme";
import * as React from "react";

const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <SessionProvider>
            <StoreProvider>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <ThemeProvider theme={theme}>
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </StoreProvider>
        </SessionProvider>
    )
}

export default Providers