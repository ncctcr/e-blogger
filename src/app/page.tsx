import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Metadata } from 'next';
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import {Grid} from "@mui/material";
import LibrariesCard from "@/components/LibrariesCard";
import RoutesCard from "@/components/RoutesCard";
import {PROTECTED_ROUTES, PUBLIC_ROUTES} from "@/constants";
import InfoCard from "@/components/InfoCard";

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Explore our latest articles and updates. Learn about new features, best practices, and more.',
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
                            <Grid item xs={12}>
                                <InfoCard />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default App