import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const InfoCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant={'h5'}>Other infos</Typography>
                <Box mt={2}>
                    <ul style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                        <li>
                            <Typography>
                                You can change the application theme by going to <code>src/theme.ts</code> and changing <code>palette.mode</code> from <code>'dark'</code> to <code>'light'</code>
                            </Typography>
                        </li>
                        <li>
                            <Typography>
                                The project has a <span style={{color: '#e80000', fontWeight: 500}}>crutch</span> with pagination.
                                API that is used for posts data does not give count of items.
                                When loading posts for the first time,
                                I had to query all items to store the <code>count</code>.
                                In normal cases, the endpoint that gives the list should have a <code>count</code> or <code>hasNextPage</code>.
                                This is located in file <code>postSlice.ts</code> in thunk <code>fetchPosts</code>
                            </Typography>
                        </li>
                    </ul>
                </Box>
            </CardContent>
        </Card>
    );
};

export default InfoCard;