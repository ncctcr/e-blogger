import React from 'react';
import Button from "@mui/material/Button";
import {signIn} from "next-auth/react";
import {useSearchParams} from "next/navigation";
import GoogleIcon from '@mui/icons-material/Google';
const GoogleButton = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/'
    const handleClick = () => {
        signIn('google', { callbackUrl })
    }

    return (
        <Button onClick={handleClick} startIcon={<GoogleIcon/>} variant={'outlined'} fullWidth>
            Sign in with Google
        </Button>
    );
};

export default GoogleButton;