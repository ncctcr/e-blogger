'use client'
import React, {useState} from 'react';
import CardContent from "@mui/material/CardContent";
import PostForm from "@/components/PostForm";
import Card from "@mui/material/Card";
import {useRouter} from "next/navigation";
import {useAppStore} from "@/store/hooks";
import {addNewPost} from "@/store/posts/postsThunks";
import Loading from "@/components/Loading";

const PostCreate = () => {
    const router = useRouter()
    const store = useAppStore()
    const [loading, setLoading] = useState(false)
    const handleSubmit = (values: {title: string, body: string}) => {
        setLoading(true)
        store.dispatch(addNewPost(values)).then(() => {
            setLoading(false)
            router.push('/posts')
        }).catch(() => {
            setLoading(false)
        })
    }

    return (
        <Card>
            <CardContent>
                <PostForm onSubmit={handleSubmit}/>
            </CardContent>
            {loading && (<Loading />)}
        </Card>
    );
};

export default PostCreate;