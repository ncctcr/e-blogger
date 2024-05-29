'use client'
import React from 'react';
import CardContent from "@mui/material/CardContent";
import PostForm from "@/components/PostForm";
import Card from "@mui/material/Card";
import {useRouter} from "next/navigation";
import {useAppStore} from "@/store/hooks";
import {addNewPost} from "@/store/features/postsSlice";

const PostCreate = () => {
    const router = useRouter()
    const store = useAppStore()

    const handleSubmit = (values: {title: string, body: string}) => {
        store.dispatch(addNewPost(values))
        router.push('/posts')
    }

    return (
        <Card>
            <CardContent>
                <PostForm onSubmit={handleSubmit}/>
            </CardContent>
        </Card>
    );
};

export default PostCreate;