import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
    return (
        <Box display='flex' justifyContent='center' alignItems={'center'} sx={{height: '80vh'}}>
            <Card sx={{maxWidth: 500, width: '100%', textAlign: 'center'}}>
                <CardContent>
                    <Box mb={3}>
                        <Typography variant={'h5'}>Login</Typography>
                    </Box>
                    <Box mb={3}>
                        <Typography variant={'body2'}>
                            Welcome to the blog. Please, provide login credential to proceed and have access to manipulate with posts
                        </Typography>
                    </Box>
                    <LoginForm />
                    <Link href={'/registration'} component={NextLink}>Not an account? Sign in</Link>
                </CardContent>
            </Card>
        </Box>
    );
};

export default LoginPage;