'use client'
import {useAppSelector, useAppStore} from "@/store/hooks";
import React, {useEffect, useRef} from "react";
import {changePageAndFetchPosts, fetchPosts} from "@/store/features/postsSlice";
import Box from "@mui/material/Box";
import PostCard from "@/components/PostCard";
import SkeletonList from "@/components/SkeletonList";
import AlertMessage from "@/components/AlertMessage";
import Pagination from '@mui/material/Pagination';
import AddNewPostButton from "@/components/AddNewPostButton";
import {useSession} from "next-auth/react";
const PostList = () => {
    const session = useSession()
    const store = useAppStore()
    const initialized = useRef(false)

    const {
        page,
        limit,
        posts,
        status,
        error
    } = useAppSelector((state) => state.posts)

    useEffect(() => {
        if (!initialized.current && posts.length === 0) {
            store.dispatch(fetchPosts({page, limit}));
            initialized.current = true;
        }
    }, [store, posts]);

    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        store.dispatch(changePageAndFetchPosts(value))
    };

    return (
        <>
            <Box display={'flex'} flexDirection={'column'} my={2} gap={4}>
                {posts.map((post, index) => (
                    <PostCard key={index} data={post} />
                ))}
                {status === 'resolved' && posts.length === 0 && (
                    <AlertMessage
                        variant={'info'}
                        title={'Info'}
                        body={'There are no posts here at the moment'}
                    />
                )}
                {status === 'loading' && <SkeletonList count={4} />}
            </Box>
            {error && (<AlertMessage variant={'error'} title={'Error'} body={error}/>)}
            {status === 'resolved' && (
                <Box display={'flex'} justifyContent={'center'} my={4}>
                    <Pagination
                        count={10}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Box>
            )}
            {session.data && <AddNewPostButton/>}
        </>
    )
}

export default PostList