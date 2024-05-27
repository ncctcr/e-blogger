'use client'
import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Divider, InputAdornment, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {authenticateUser} from "@/services/user.service";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { setCookie } from 'cookies-next';
import {useRouter} from "next/navigation";
import GoogleButton from "@/components/GoogleButton";
import {signIn} from "next-auth/react";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required')
})

const INITIAL_VALUES = {
    email: '',
    password: ''
}

const LoginPage = () => {
    const router = useRouter()

    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        setErrors,
    } = useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            signIn('credentials', {
                email: values.email,
                password: values.password,
                redirect: false
            }).then((response) => {
                if (response && response.ok) {
                    router.push('/')
                } else if (response) {
                    setErrors({
                        email: response.error!,
                        password: response.error!
                    })
                }
            })
        },
    });

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
                    <form onSubmit={handleSubmit}>
                        <Box mb={3}>
                            <TextField
                                id='email'
                                name='email'
                                label='Email'
                                placeholder={'Enter your email'}
                                value={values.email}
                                onChange={handleChange}
                                helperText={!!errors.email && !!touched.email && errors.email}
                                error={!!errors.email && !!touched.email}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                        <Box mb={3}>
                            <TextField
                                id='password'
                                name='password'
                                label='Password'
                                type='password'
                                placeholder={'Enter your password'}
                                value={values.password}
                                onChange={handleChange}
                                helperText={!!errors.password && !!touched.password && errors.password}
                                error={!!errors.password && !!touched.password}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                        <Box display='flex' justifyContent='center' mb={3}>
                            <Button type='submit' variant='contained' fullWidth>Login</Button>
                        </Box>
                        <Box display="flex" alignItems="center" mb={3}>
                            <Divider style={{ flex: 1 }} />
                            <Typography variant="body2" style={{ margin: '0 10px' }}>OR</Typography>
                            <Divider style={{ flex: 1 }} />
                        </Box>
                        <Box mb={3}>
                            <GoogleButton />
                        </Box>
                    </form>
                    <Link href={'/registration'} component={NextLink}>Not an account? Sign in</Link>
                </CardContent>
            </Card>
        </Box>
    );
};

export default LoginPage;