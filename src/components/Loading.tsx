import React from 'react';
import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";

const Loading = () => {
    return (
        <Box
            position={'fixed'}
            height={'100vh'}
            width={'100vw'}
            top={0}
            left={0}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            zIndex={100}
            sx={{backgroundColor: 'rgba(0,0,0,0.38)'}}
        >
            <CircularProgress />
        </Box>
    );
};

export default Loading;