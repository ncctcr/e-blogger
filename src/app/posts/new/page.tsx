'use client'
import React from 'react';
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import {useRouter} from "next/navigation";
import {useAppStore} from "@/store/hooks";
import {addNewPost} from "@/store/features/postsSlice";
import PostForm from "@/components/PostForm";

const PostCreate = () => {
    const router = useRouter()
    const store = useAppStore()

    const handleSubmit = (values: {title: string, body: string}) => {
        store.dispatch(addNewPost(values))
        router.push('/posts')
    }

    return (
        <>
            <CustomBreadcrumbs
                current={'New post'}
                before={[{title: 'Posts', link: '/posts'}]}
            />
            <Box my={2}>
                <Card>
                    <CardContent>
                        <PostForm onSubmit={handleSubmit}/>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};

export default PostCreate;