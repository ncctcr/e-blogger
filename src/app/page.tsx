import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { Metadata } from 'next';
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import {Grid} from "@mui/material";
import LibrariesCard from "@/components/LibrariesCard";

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Blog description',
};

const App = () => {
    return (
        <Container maxWidth="lg">
            <CustomBreadcrumbs current={'Home'}/>
            <Box my={2}>
                <Grid container>
                    <Grid item xs={6}>
                        <LibrariesCard />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default App