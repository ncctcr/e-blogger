import React, {FC} from 'react';
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import Box from "@mui/material/Box";
import PostDetail from "@/components/PostDetail";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Blog | Edit post',
    description: 'Edit your blog post. Update your content, make changes, and keep your readers engaged with the latest information.',
};

type TypeProps = {
    params: {
        id: number
    }
}

const PageDetail: FC<TypeProps> = ({params: { id }}) => {
    return (
        <>
            <CustomBreadcrumbs
                current={String(id)}
                before={[{title: 'Posts', link: '/posts'}]}
            />
            <Box my={2}>
                <PostDetail id={id}/>
            </Box>
        </>
    );
};

export default PageDetail;