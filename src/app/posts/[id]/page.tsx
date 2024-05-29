import React, {FC} from 'react';
import CustomBreadcrumbs from "@/components/CustomBreadcrumbs";
import Box from "@mui/material/Box";
import PostDetail from "@/components/PostDetail";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Blog | Detail post',
    description: 'View the details of a specific blog post. Explore the content, engage with the author, and discover valuable insights.',
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