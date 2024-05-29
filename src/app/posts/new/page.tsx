import React from 'react';
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Box from "@mui/material/Box";
import PostCreate from "@/components/PostCreate";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Blog | Create new post',
    description: 'Create a new blog post in our blogging platform. Share your thoughts and ideas with the world through engaging and interactive posts.',
};


const PageCreate = () => {
    return (
        <>
            <CustomBreadcrumbs
                current={'New post'}
                before={[{title: 'Posts', link: '/posts'}]}
            />
            <Box my={2}>
                <PostCreate />
            </Box>
        </>
    );
};

export default PageCreate;