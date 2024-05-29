import React from 'react';
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import Box from "@mui/material/Box";
import PostCreate from "@/components/PostCreate";

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