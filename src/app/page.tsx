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
import RoutesCard from "@/components/RoutesCard";
import {PROTECTED_ROUTES, PUBLIC_ROUTES} from "@/constants";

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Blog description',
};

const App = () => {
    return (
        <Container maxWidth="lg">
            <CustomBreadcrumbs current={'Home'}/>
            <Box my={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <LibrariesCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <RoutesCard title={'Public routes'} routes={PUBLIC_ROUTES}/>
                            </Grid>
                            <Grid item xs={12}>
                                <RoutesCard title={'Protected routes'} routes={PROTECTED_ROUTES}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default App