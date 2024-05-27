import React from 'react';
import PostList from "@/components/PostList";
import { Metadata } from 'next';
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import AddNewPostButton from "@/components/AddNewPostButton";
export const metadata: Metadata = {
    title: 'Blog | Posts',
    description: 'Posts description',
};

const Posts = () => {
    return (
        <>
            <CustomBreadcrumbs current={'Posts'}/>
            <AddNewPostButton/>
            <PostList/>
        </>
    );
};

export default Posts;