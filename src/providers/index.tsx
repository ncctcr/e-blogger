'use client'
import {SessionProvider} from "next-auth/react";
import StoreProvider from "@/providers/StoreProvider";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v14-appRouter";
import {ThemeProvider} from "@mui/material/styles";
import * as React from "react";
import {createTheme} from "@/theme/theme";
import {FC} from "react";

type TypeProps = {
    children: React.ReactNode
}

const Providers: FC<TypeProps> = ({children}) => {
    return (
        <SessionProvider>
            <StoreProvider>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <ThemeProvider theme={createTheme('dark')}>
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </StoreProvider>
        </SessionProvider>
    )
}

export default Providers