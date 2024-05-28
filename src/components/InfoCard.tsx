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
                    <ul>
                        <li>
                            <Typography>
                                You can change the application theme by going to <code>src/theme.ts</code> and changing <code>palette.mode</code> from <code>'dark'</code> to <code>'light'</code>
                            </Typography>
                        </li>
                    </ul>
                </Box>
            </CardContent>
        </Card>
    );
};

export default InfoCard;