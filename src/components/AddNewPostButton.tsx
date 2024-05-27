'use client'
import React from 'react';
import AddIcon from "@mui/icons-material/Add";
import {Button as MuiButton} from "@mui/material";
import styled from "@emotion/styled";
import Tooltip from "@mui/material/Tooltip";
import {useRouter} from "next/navigation";

const Button = styled(MuiButton)`
  border-radius: 50%;
  min-width: unset;
  padding: 8px;
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 1
`

const AddNewPostButton = () => {
    const router = useRouter()

    const handleClick = () => {
        router.push('/posts/new')
    }

    return (
        <Tooltip title='Create new post' arrow>
            <Button
                size={'large'}
                color={'primary'}
                variant={'contained'}
                onClick={handleClick}
            >
                <AddIcon fontSize={'large'} />
            </Button>
        </Tooltip>
    );
};

export default AddNewPostButton;