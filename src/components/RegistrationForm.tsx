'use client'
import React from 'react';
import Box from "@mui/material/Box";
import {InputAdornment, TextField} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import {useRouter} from "next/navigation";
import {useFormik} from "formik";
import {createUser} from "@/services/user.service";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required')
})

const INITIAL_VALUES = {
    name: '',
    email: '',
    password: ''
}

const RegistrationForm = () => {
    const router = useRouter()

    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        setErrors
    } = useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            createUser(values).then((response) => {
                router.push('/login')
            }).catch((err) => {
                const { message } = err.response.data
                setErrors({email: message})
            })
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <Box mb={3}>
                <TextField
                    id='name'
                    name='name'
                    label='Name'
                    placeholder={'Enter your name'}
                    value={values.name}
                    onChange={handleChange}
                    helperText={!!errors.name && !!touched.name && errors.name}
                    error={!!errors.name && !!touched.name}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
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
                <Button type='submit' variant='contained' fullWidth>Register</Button>
            </Box>
        </form>
    );
};

export default RegistrationForm;