import React, {FC} from 'react';
import {Alert, AlertTitle} from "@mui/material";

type TypeProps = {
    title: string
    body?: string
    variant?: 'error' | 'warning' | 'info' | 'success';
}

const AlertMessage: FC<TypeProps> = ({
    title,
    body,
    variant = 'success'
}) => {
    return (
        <Alert severity={variant}>
            <AlertTitle>{title}</AlertTitle>
            {body && body}
        </Alert>
    );
};

export default AlertMessage;