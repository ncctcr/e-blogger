'use client'

import React from 'react';
import Box from "@mui/material/Box";
import {Divider, InputAdornment, TextField} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GoogleButton from "@/components/GoogleButton";
import {useFormik} from "formik";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required')
})

const INITIAL_VALUES = {
    email: '',
    password: ''
}

const LoginForm = () => {
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
    );
};

export default LoginForm;