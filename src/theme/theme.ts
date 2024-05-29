'use client';
import {createTheme as createMuiTheme} from '@mui/material/styles';
import {darkPalette, lightPalette} from "@/theme/palette";
import {createThemeComponents} from "@/theme/components";
import shape from "@/theme/shape";
import transitions from "@/theme/transitions";
import mixins from "@/theme/mixins";
import typography from "@/theme/typography";

export const createTheme = (
    mode: "dark" | "light"
) => {
    const palette = mode === "dark" ? darkPalette : lightPalette;

    // Create base theme
    const baseTheme = createMuiTheme({
        direction: 'ltr',
        mixins,
        palette,
        shape,
        transitions,
        typography,
    });

    // Inject base theme to be used in components
    return createMuiTheme(
        {
            components: createThemeComponents(baseTheme),
        },
        baseTheme
    );
};