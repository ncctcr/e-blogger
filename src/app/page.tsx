import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { Metadata } from 'next';
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Blog description',
};

const App = () => {
    return (
        <Container maxWidth="lg">
            <CustomBreadcrumbs current={'Home'}/>
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h1" sx={{mb: 2}}>
                    Material UI - Next.js App Router example in TypeScript
                </Typography>
                <Link href="/posts" color="secondary" component={NextLink}>
                    Go to the posts page
                </Link>
            </Box>
        </Container>
    );
}

export default App