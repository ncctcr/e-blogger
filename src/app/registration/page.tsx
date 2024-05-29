import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import RegistrationForm from "@/components/RegistrationForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Blog | Registration',
    description: 'Create a new account to join our blogging community. Sign up to start creating, sharing, and managing your blog posts.',
};

const RegistrationPage = () => {
    return (
        <Box display='flex' justifyContent='center' alignItems={'center'} sx={{height: '80vh'}}>
            <Card sx={{maxWidth: 500, width: '100%', textAlign: 'center'}}>
                <CardContent>
                    <Box mb={3}>
                        <Typography variant={'h5'}>Registration</Typography>
                    </Box>
                    <Box mb={3}>
                        <Typography variant={'body2'}>
                            Please create a user to gain access to work with posts
                        </Typography>
                    </Box>
                    <RegistrationForm/>
                    <Link href={'/login'} component={NextLink}>Already have an account? Sign up</Link>
                </CardContent>
            </Card>
        </Box>
    );
};

export default RegistrationPage;